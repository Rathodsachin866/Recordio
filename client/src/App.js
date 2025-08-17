import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Chat from './Pages/chat/Chat';
import PodcastRoom from './Pages/PodcastRoom/PodcastRoom';
import Profile from './Pages/Profile/Profile';
import Ratings from './Pages/Ratings/Rating';
import Settings from './Pages/Settings/Setting';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Meeting from './Pages/Meeting/Meeting';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/podcast" element={<PodcastRoom />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/meeting' element={<Meeting/>}/>

                   {/* <Route path="/meeting/:roomId" element={<MeetingPage />} />
        <Route path="*" element={<LandingPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;