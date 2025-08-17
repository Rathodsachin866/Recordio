import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Contact from '../Contactus/Contact';
// import PodcastRoom from '../PodcastRoom/PodcastRoom';
import About from '../About/About';
import Features from '../Feature/Feature';
import './home.css';


function Home() {

  const navigate = useNavigate();
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Message submitted!');
  //   setFormData({ name: '', email: '', message: '' });
  // };

  return (
    <div>
      {/* 🎙️ Hero Section */}
      <div className="hero-container">
        {/* Top Section */}
        <div className="text-section">
          <h1 className="text-solid">BEST</h1>
          <h1 className="text-outline">PODCAST</h1>
          <h1 className="text-solid big">BROADCASTING</h1>
          <p>Forget the distance — record your podcast remotely, anywhere, anytime.</p>
          <div className="create-btn">
            <button onClick={() => navigate('/podcast')}>Create Podcast</button>
          </div>
        </div>

        {/* Decorative Shape */}
        {/* <div className="circle-shape">
                <div className="green-circle"></div>
                <div className="wave-lines"></div>
              </div> */}

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9356796654"
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={25} />
        </a>
      </div>

      {/* ✅ Features Section */}

      <Features></Features>

      {/* ✅ Benefits */}


      <hr className="section-divider" />

      {/* ✅ About */}
      <About></About>

      <hr className="section-divider" />
      <Contact></Contact>

    </div>
  );
}

export default Home;
