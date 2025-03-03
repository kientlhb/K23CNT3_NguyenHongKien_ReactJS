import React, { Component } from 'react';

class NhkEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhkName:'Chung',
            nhkAge:45,
            nhkGender:'Female',
            nhkCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nhkHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nhkHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nhkName + "\n" + this.state.nhkAge);

        // Chuyển dữ liệu trên form lên App component (nhkApp);
        this.props.onnhkHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nhkName'>Student Name:</label>
                        <input type='text' name='nhkName' id='nhkName'
                            value={this.state.nhkName}
                            onChange={this.nhkHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nhkAge'>Student Age:</label>
                        <input type='text' name='nhkAge' id='nhkAge'
                            value={this.state.nhkAge}
                            onChange={this.nhkHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nhkGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nhkGender' id='nhkMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nhkGender === 'Male'}
                                onChange={this.nhkHandleChange} />
                            <label htmlFor='nhkMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nhkGender' id='nhkFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nhkGender === 'Female'}
                                onChange={this.nhkHandleChange} />
                            <label htmlFor='nhkFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nhkGender' id='nhkNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nhkGender === 'None'}
                                onChange={this.nhkHandleChange} />
                            <label htmlFor='nhkNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nhkCourse'>
                            <select name='nhkCourse' id='nhkCourse'
                                    value={this.state.nhkCourse}
                                    onChange={this.nhkHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.nhkHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhkEventForm5;