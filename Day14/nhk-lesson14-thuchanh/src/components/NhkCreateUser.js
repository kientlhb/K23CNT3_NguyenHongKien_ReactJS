import { useState } from 'react';
import { createUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const NhkCreateUser = () => {
  const [user, setUser] = useState({ NhkFullname: '', NhkEmail: '', NhkPhone: '', NhkActive: false });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: type === 'radio' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user);
      navigate('/users');
    } catch (err) {
      setError('Failed to create user. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Thêm mới thông tin User</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="user-form">
        <input 
          type="text" 
          name="NhkFullname"
          placeholder="Full Name" 
          value={user.NhkFullname} 
          onChange={handleChange} 
          required
        />
        <input 
          type="email" 
          name="NhkEmail"
          placeholder="Email" 
          value={user.NhkEmail} 
          onChange={handleChange} 
          required
        />
        <input 
          type="text" 
          name="NhkPhone"
          placeholder="Phone" 
          value={user.NhkPhone} 
          onChange={handleChange} 
          required
        />
        <div>
          <label>
            <input 
              type="radio" 
              name="NhkActive" 
              checked={user.NhkActive} 
              onChange={() => setUser({ ...user, NhkActive: true })} 
            />
            Hoạt động
          </label>
          <label>
            <input 
              type="radio" 
              name="NhkActive" 
              checked={!user.NhkActive} 
              onChange={() => setUser({ ...user, NhkActive: false })} 
            />
            Đang khóa
          </label>
        </div>
        <button 
          type="submit" 
          className="btn" 
          disabled={!user.NhkFullname || !user.NhkEmail || !user.NhkPhone}
        >
          Create
        </button>
        <button type="button" onClick={() => navigate('/users')} className="btn">Back</button>
      </form>
    </div>
  );
};

export default NhkCreateUser;
