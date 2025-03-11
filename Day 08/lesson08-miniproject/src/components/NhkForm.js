import React, { Component } from "react";

class NhkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhkId: "",
      nhkStudentName: "",
      nhkAge: "",
      nhkGender: "",
      nhkBirthday: "",
      nhkBirthPlace: "",
      nhkAddress: "",
    };
  }

  // Khi props thay đổi, cập nhật state
  componentDidUpdate(prevProps) {
    if (
      prevProps.renderNhkStudent !== this.props.renderNhkStudent &&
      this.props.renderNhkStudent
    ) {
      this.setState({ ...this.props.renderNhkStudent });
    }
  }

  // Xử lý thay đổi input
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Xử lý submit form
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onNhkHandleSubmit(this.state);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample" onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="nhkId"
                  value={this.state.nhkId}
                  readOnly
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="nhkStudentName"
                  value={this.state.nhkStudentName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="number"
                  className="form-control"
                  name="nhkAge"
                  value={this.state.nhkAge}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="nhkGender"
                  value={this.state.nhkGender}
                  onChange={this.handleChange}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="nhkBirthday"
                  placeholder="dd/mm/yyyy"
                  value={this.state.nhkBirthday}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="nhkBirthPlace"
                  value={this.state.nhkBirthPlace}
                  onChange={this.handleChange}
                >
                  <option value="HN">Hà Nội</option>
                  <option value="TpHCM">TP. Hồ Chí Minh</option>
                  <option value="DN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="nhkAddress"
                  value={this.state.nhkAddress}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Lưu
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NhkForm;
