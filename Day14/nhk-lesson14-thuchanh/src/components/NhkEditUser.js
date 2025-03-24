import { useState, useEffect } from 'react';
import { getUser, updateUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const NhkEditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id || id === "undefined") {
      setError("❌ ID không hợp lệ!");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        console.log("🔍 Đang lấy dữ liệu user với ID:", id);
        const userData = await getUser(id);

        if (userData) {
          setUser(userData);
        } else {
          setError("❌ Không tìm thấy người dùng!");
        }
      } catch (err) {
        setError("❌ Lỗi khi tải dữ liệu người dùng!");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "NhkActive" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, user);
      alert('Cập nhật thành công!');
      navigate('/users');
    } catch (err) {
      setError('Lỗi khi cập nhật người dùng!');
    }
  };

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!user) return <p>Không tìm thấy dữ liệu người dùng.</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Chỉnh sửa người dùng</h2>
      <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
        <div className="mb-3">
          <label className="form-label">Họ và Tên:</label>
          <input type="text" className="form-control" name="NhkFullname" value={user.NhkFullname || ''} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" name="NhkEmail" value={user.NhkEmail || ''} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Số điện thoại:</label>
          <input type="text" className="form-control" name="NhkPhone" value={user.NhkPhone || ''} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Trạng thái:</label>
          <select className="form-control" name="NhkActive" value={(user.NhkActive || false).toString()} onChange={handleChange}>
            <option value="true">Hoạt động</option>
            <option value="false">Khóa</option>
          </select>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">Cập nhật</button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/users')}>Hủy</button>
        </div>
      </form>
    </div>
  );
};

export default NhkEditUser;
