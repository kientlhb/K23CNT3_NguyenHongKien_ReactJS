import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/api';
import { Link } from 'react-router-dom';

const NhkListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, []);

  const handleDelete = (NhkId) => {
    deleteUser(NhkId).then(() => setUsers(users.filter(user => user.NhkId !== NhkId)));
  };

  return (
    <div className="container">
      <h2>Danh sách User</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.NhkId}>
              <td>{user.NhkFullname}</td>
              <td>{user.NhkEmail}</td>
              <td>{user.NhkPhone}</td>
              <td>{user.NhkActive ? "Hoạt động" : "Đang khóa"}</td>
              <td>
                <Link to={`/edit/${user.NhkId}`} className="btn">Sửa</Link>
                <button onClick={() => handleDelete(user.NhkId)} className="btn">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NhkListUsers;