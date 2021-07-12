import { useState } from 'react';
import axios from 'axios';

import zuri from './zuri.png'
import images from './images.png'

const projectID = '6599286e-0434-4e1c-9628-1732a123332b';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Please provide correct login details.');
    }
  };

  return (
    <main>
      <div class="nav">
        <img src={images} alt={images}/>
        <img src={zuri} alt={zuri}/>
      </div>
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Zuri Chat</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          <p style={{color:'red', textAlign:"center"}}>{error}</p>
        </div>
      </div>
    </main>

  );
};

export default Modal;
