import React, { Component } from "react";

class NhkEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhkSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nhkHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nhkSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            nhkSelectCheckBox:selectedOptions
        });
    }

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nhkSelectCheckBox.includes("Apple")}
              onChange={this.nhkHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nhkSelectCheckBox.includes("Banana")}
              onChange={this.nhkHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nhkSelectCheckBox.includes("Orange")}
              onChange={this.nhkHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NhkEventForm4;