import React, { Component } from 'react'

 class NhkRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state={
            nhkStudens:[
         {nhkId:1,nhkName:"Nguyen kien",nhkAge:20},
         {nhkId:2,nhkName:"Nguyen hong kien",nhkAge:30},
         {nhkId:3,nhkName:"Nguyen hong Kon",nhkAge:40},
         {nhkId:4,nhkName:"Nguyen hong kiet",nhkAge:50},
                ],
        }
    }
  render() {
    //Ham hien thi du lieu
    let {nhkStudens}=this.state;
    let nhkElement=nhkStudens.map((nhkItem)=>{
        return(
            <li>{nhkItem.nhkId}-{nhkItem.nhkName}</li>
        );
    })
    let nhkRenderElement= nhkStudens.map((nhkItem,index)=>{
        return(
            <tr>
            <td>{nhkItem.nhkId}</td>
            <td>{nhkItem.nhkName}</td>
            <td>{nhkItem.nhkAge}</td>
            <td>
                <button className='btn btn-success mx-1'>Sua</button>
                <button className='btn btn-primary mx-1'>Xoa</button>
            </td>
        </tr>
        )
    })
    return (
      <div>
        <h2>Danh sach sinh vien </h2>
        {nhkElement}
        <hr/>
        <h2> O tren xau--Su dung css</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>nhkID</th>
                    <th>nhkName</th>
                    <th>nhkAge</th>
                    <th>nhkAction</th>
                </tr>
            </thead>
            <tbody>
            {nhkRenderElement}
            </tbody>
        </table>
      </div>
    );
  }
}
export default NhkRenderListObject;