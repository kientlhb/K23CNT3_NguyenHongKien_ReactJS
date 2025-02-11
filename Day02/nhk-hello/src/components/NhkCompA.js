import React, { Component } from 'react'

export default class NhkCompA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "nguyen hong kien",
        };
    }

    render() {
        return (
            <div className="App">
                <h2>NhkCompA</h2>
                <p> Dữ liệu trong state: {this.state.name}</p>
                <h3> Hiển thị dữ liệu từ props</h3>
                <p>Name: {this.props.NhkName}</p>
                <p>Address: {this.props.NhkAddress}</p>
            </div>
        )
    }
}