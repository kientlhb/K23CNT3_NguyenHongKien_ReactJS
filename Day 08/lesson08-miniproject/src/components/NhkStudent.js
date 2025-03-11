import React from "react";

const NhkStudent = ({ renderNhkStudent, NhkIndex, onNhkHandleView, onNhkHandleEdit, onNhkHandleDelete }) => {
  
  // Hàm xử lý xóa (có xác nhận)
  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sinh viên ${renderNhkStudent.nhkStudentName}?`)) {
      onNhkHandleDelete(renderNhkStudent.nhkId);
    }
  };

  return (
    <tr>
      <td>{NhkIndex + 1}</td>
      <td>{renderNhkStudent.nhkId}</td>
      <td>{renderNhkStudent.nhkStudentName}</td>
      <td>{renderNhkStudent.nhkAge}</td>
      <td>{renderNhkStudent.nhkGender}</td>
      <td>
        <div className="template-demo">
          <button 
            type="button" 
            className="btn btn-danger btn-icon-text mx-1" 
            onClick={() => onNhkHandleView(renderNhkStudent)}
          >
            Xem
          </button>
          <button 
            type="button" 
            className="btn btn-warning btn-icon-text mx-1" 
            onClick={() => onNhkHandleEdit(renderNhkStudent)}
          >
            Sửa
          </button>
          <button 
            type="button" 
            className="btn btn-success btn-icon-text mx-1" 
            onClick={handleDelete}
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
};

export default NhkStudent;
