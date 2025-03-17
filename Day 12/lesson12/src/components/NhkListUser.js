import React from 'react';

export default function NhkListUser({ renderNhkUsers }) {
  const nhkElements = renderNhkUsers.map((nhkItem, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{nhkItem.id}</td>
        <td>{nhkItem.nhkFullName}</td>
        <td>{nhkItem.nhkUserName}</td>
        <td>{nhkItem.nhkPass}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Danh Sách Tài Khoản</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>{nhkElements}</tbody> {/* Correctly placed inside <tbody> */}
      </table>
    </div>
  );
}
