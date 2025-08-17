import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash } from 'react-icons/fa';
import './podcastRoom.css';

const socket = io('http://localhost:3001');

function PodcastRoom() {
  const [roomId, setRoomId] = useState('podcast-room');
  const [joined, setJoined] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const localStream = useRef(null);
  const remoteStream = useRef(null);
  const peerConnection = useRef(null);
  const userMediaStream = useRef(null);

  const servers = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  };

  const startConnection = async () => {
    peerConnection.current = new RTCPeerConnection(servers);

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('iceCandidate', { candidate: event.candidate });
      }
    };

    peerConnection.current.ontrack = (event) => {
      if (remoteStream.current) {
        remoteStream.current.srcObject = event.streams[0];
      }
    };

    userMediaStream.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (localStream.current) localStream.current.srcObject = userMediaStream.current;

    userMediaStream.current.getTracks().forEach((track) => {
      peerConnection.current.addTrack(track, userMediaStream.current);
    });
  };

  const handleJoin = async () => {
    socket.emit('join', { roomId });
    setJoined(true);
    await startConnection();
  };

  useEffect(() => {
    socket.on('localDescription', async ({ description }) => {
      await peerConnection.current.setRemoteDescription(description);
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit('remoteDescription', { description: answer });
    });

    socket.on('remoteDescription', async ({ description }) => {
      await peerConnection.current.setRemoteDescription(description);
    });

    socket.on('iceCandidate', async ({ candidate }) => {
      if (candidate) {
        await peerConnection.current.addIceCandidate(candidate);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendOffer = async () => {
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);
    socket.emit('localDescription', { description: offer });
  };

  const toggleMic = () => {
    const audioTrack = userMediaStream.current?.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setIsMicOn(audioTrack.enabled);
    }
  };

  const toggleVideo = () => {
    const videoTrack = userMediaStream.current?.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setIsVideoOn(videoTrack.enabled);
    }
  };

  const hangUp = () => {
    userMediaStream.current?.getTracks().forEach(track => track.stop());
    peerConnection.current?.close();
    setJoined(false);
  };

  return (
    <div className="podcast-container">
      <header className="podcast-header">
        CREATE PODCAST WITH AI
      </header>

      {!joined ? (
        <div className="join-section">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room ID"
            className="room-input"
          />
          <button onClick={handleJoin} className="join-btn">Join Room</button>
        </div>
      ) : (
        <div className="video-section">
          {/* Local video */}
          <div className="video-card">
            <video ref={localStream} autoPlay muted playsInline className="video-box" />
            <div className="btn-group">
              <button onClick={toggleMic}>
                {isMicOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
              </button>
              <button onClick={toggleVideo}>
                {isVideoOn ? <FaVideo /> : <FaVideoSlash />}
              </button>
              <button onClick={hangUp}><FaPhoneSlash /></button>
            </div>
          </div>

          {/* Remote video */}
          <div className="video-card">
            <video ref={remoteStream} autoPlay playsInline className="video-box" />
          </div>
        </div>
      )}

      <footer className="podcast-footer">
        Conversations that inspire, inform, and ignite ideas — one episode at a time.
      </footer>
    </div>
  );
}

export default PodcastRoom;
