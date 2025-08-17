import React, { useState } from 'react';
import './profile.css';
import GraphWithHint from '../../Components/Graph/GraphWithHint';

function Profile() {
  const [profile, setProfile] = useState({
    name: 'Aaron Lovren',
    bio: 'Full-stack developer & podcast enthusiast.',
    // avatar: defaultAvatar,
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfile({ ...profile, avatar: imgURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <div className="profile-layout">
        <div className="profile-card">
          <h2 className="profile-title">👤 Your Profile</h2>
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="avatar-section">
              {profile.avatar ? (
                <img src={profile.avatar} alt="Avatar" className="avatar-preview" />
              ) : (
                <div className="avatar-placeholder">No Avatar</div>
              )}
              <input type="file" accept="image/*" onChange={handleAvatarChange} />
            </div>

            <label>
              Name:
              <input type="text" name="name" value={profile.name} onChange={handleChange} />
            </label>

            <label>
              Bio:
              <textarea name="bio" value={profile.bio} onChange={handleChange} />
            </label>

            <button type="submit">Save Changes</button>
          </form>
        </div>

        <div className="profile-graph">
          <GraphWithHint accuracy={85} hint="This is a sample hint for the profile section." />
        </div>
      </div>
    </div>
  );
}

export default Profile;
