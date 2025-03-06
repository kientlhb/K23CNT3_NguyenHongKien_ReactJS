import React, { Component } from "react";
import NhkStudent from "./NhkStudent";

class NhkStudentList extends Component {
  // Hàm xử lý sự kiện xem
  NhkHandleView = (NhkStudent) => {
    // Chuyển dữ liệu lên NhkApp
    this.props.onNhkHandleView(NhkStudent);
  };

  render() {
    // lấy dữ liệu từ props của NhkApp chuyển xuống
    let { renderNhkStudents } = this.props;
    console.log("List:", renderNhkStudents);

    // chuyển dữ liệu vào NhkStudent để hiển thị
    let NhkElementStudent = renderNhkStudents.map((NhkItem, index) => {
      return (
        <NhkStudent
          key={index}
          NhkIndex={index + 1} // Truyền số thứ tự vào component con
          renderNhkStudent={NhkItem}
          onNhkHandleView={this.NhkHandleView}
        />
      );
    });

    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{NhkElementStudent}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NhkStudentList;
