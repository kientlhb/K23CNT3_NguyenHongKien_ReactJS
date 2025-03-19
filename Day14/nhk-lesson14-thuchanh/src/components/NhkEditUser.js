import { useState, useEffect } from 'react';
import { getUser, updateUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const NhkEditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ NhkFullname: '', NhkEmail: '', NhkPhone: '', NhkActive: false });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id);
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      navigate('/users');
    } catch (err) {
      setError('Failed to update user');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h2 className="title">Sửa thông tin User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" value={user.NhkFullname} required onChange={e => setUser({...user, NhkFullname: e.target.value})} />
        <input type="email" value={user.NhkEmail} required onChange={e => setUser({...user, NhkEmail: e.target.value})} />
        <input type="text" value={user.NhkPhone} required onChange={e => setUser({...user, NhkPhone: e.target.value})} />
        
        <div>
          <label>
            <input type="radio" name="active" value="true" checked={user.NhkActive} onChange={() => setUser({...user, NhkActive: true})} />
            Hoạt động
          </label>
          <label>
            <input type="radio" name="active" value="false" checked={!user.NhkActive} onChange={() => setUser({...user, NhkActive: false})} />
            Đang khóa
          </label>
        </div>
        
        <button type="submit" className="btn" disabled={loading}>Update</button>
        <button type="button" onClick={() => navigate('/users')} className="btn">Back</button>
      </form>
    </div>
  );
};

export default NhkEditUser;
