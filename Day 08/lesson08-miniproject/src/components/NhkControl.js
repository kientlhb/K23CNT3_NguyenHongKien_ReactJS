import React, { Component } from 'react';

class NhkControl extends Component {
    render() {
        const { onNhkAdd, onNhkSearch, onNhkSort } = this.props;

        return (
            <div className="card-header">
                <div className="row">
                    {/* Thêm sinh viên */}
                    <div className="col-3">
                        <button
                            type="button"
                            className="btn btn-primary btn-icon-text"
                            onClick={onNhkAdd}
                        >
                            Thêm mới sinh viên
                        </button>
                    </div>

                    {/* Tìm kiếm sinh viên */}
                    <div className="col-6">
                        <form className="search-form" onSubmit={onNhkSearch}>
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                            />
                            <button type="submit" className="btn btn-primary btn-icon-text">
                                Tìm kiếm
                            </button>
                        </form>
                    </div>

                    {/* Sắp xếp sinh viên */}
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" onChange={onNhkSort}>
                            <option value="">Sắp xếp</option>
                            <option value="name">Tên</option>
                            <option value="age">Tuổi</option>
                            <option value="gender">Giới tính</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default NhkControl;
