import React, { Component } from "react";

class NhkStudent extends Component {
  
  // Hàm xử lý chức năng xem
  NhkHandleView = () => {
    this.props.onNhkHandleView(this.props.renderNhkStudent);
  };

  render() {
    // Lấy dữ liệu từ props
    let { renderNhkStudent, NhkIndex } = this.props;
    
    return (
      <tr>
        <td>{NhkIndex}</td>
        <td>{renderNhkStudent.nhkId}</td>
        <td>{renderNhkStudent.nhkStudentName}</td>
        <td>{renderNhkStudent.nhkAge}</td>
        <td>{renderNhkStudent.nhkGender}</td>
        <td>
          <div className="template-demo">
            <button 
              type="button" 
              className="btn btn-danger btn-icon-text" 
              onClick={this.NhkHandleView}
            >
              Xem
            </button>
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default NhkStudent;
