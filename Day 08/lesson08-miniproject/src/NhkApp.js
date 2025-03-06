import React, { Component } from "react";
import NhkForm from "./components/NhkForm";
import NhkStudentList from "./components/NhkStudentList";
import NhkControl from "./components/NhkControl";

class NhkApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhkStudents: [
        { nhkId: "SV001", nhkStudentName: "Nguyen Hong Kien", nhkAge: 18, nhkGender: "Nam", nhkBirthday: "02/11/2005", nhkBirthPlace: "HN", nhkAddress: "Tòa VCN, 25 Vũ Ngọc Phan" },
        { nhkId: "SV002", nhkStudentName: "Le tan kiet", nhkAge: 188, nhkGender: "Nữ", nhkBirthday: "25/05/1179", nhkBirthPlace: "HP", nhkAddress: "Trung Quốc" },
        { nhkId: "SV003", nhkStudentName: "Tan thit Bo", nhkAge: 55, nhkGender: "Nam", nhkBirthday: "25/05/1079", nhkBirthPlace: "TpHCM", nhkAddress: "Trung Quốc" },
        { nhkId: "SV004", nhkStudentName: "Hoàng Ngoc Thuy Duong", nhkAge: 18, nhkGender: "Nu", nhkBirthday: "29/07/2005", nhkBirthPlace: "HN", nhkAddress: "120 Hai Ba trung" },
      ],
      nhkStudent: "", // Cần đúng chữ thường
    };
  }

  // Hàm xử lý sự kiện view Student
  nhkHandleView = (nhkStudent) => {
    this.setState({
      nhkStudent: nhkStudent,
    });
  };

  render() {
    console.log("View Student:", this.state.nhkStudent);

    return (
      <div>
        <h1 className="text-center">
          Nguyen Hong Kien - K23CNT3 - Mini Project 1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* header */}
                <NhkControl />
                {/* danh sách sinh viên */}
                <NhkStudentList 
                  renderNhkStudents={this.state.nhkStudents} 
                  onNhkHandleView={this.nhkHandleView} // Đã sửa đúng chữ hoa/chữ thường
                />
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form */}
              <NhkForm renderNhkStudent={this.state.nhkStudent} /> {/* Đúng tên biến */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NhkApp;
