import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/recordio_logo.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="navbar-links">
        <Link to="/">HOME</Link>
        <Link to="/chat">COMUNICATE</Link>
        <Link to="/podcast">PODCAST ROOM</Link>
         <Link to="/meeting">MEETINGS</Link>
        <Link to="/profile">PROFILE</Link>
        <Link to="/ratings">RATING</Link>
        <Link to="/settings">SETTINGS</Link>
       
        {!user ? (
          <>
            <Link to="/signin" className="signin-btn">Sign In</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </>
        ) : (
          <div className="profile-container">
            <img
              src={user.avatar || "/default-avatar.png"}
              alt="Profile"
              className="profile-img"
              onClick={() => navigate("/profile")}
            />
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        )}
        <hr />
      </nav>
    </header>
  );
}

export default Navbar;
