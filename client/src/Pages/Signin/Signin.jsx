import React from "react";
import "./signin.css";
function Signin() {
  return (
    <div className="signin-wrapper2">
      <div className="form-container2">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
export default Signin;