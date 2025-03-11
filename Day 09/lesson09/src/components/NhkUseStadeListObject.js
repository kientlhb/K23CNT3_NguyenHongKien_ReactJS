import React, { useState } from 'react'

export default function NhkUseStadeListObject() {
    //mocdata
    const listStudent = [
        { nhkId: "SV001", nhkName: "Nguyen Hong Kien", nhkAge: 18, nhkClass:"K23CNT3" },
        { nhkId: "SV002", nhkName: "Le tan kiet", nhkAge: 188, nhkClass:"K23CNT1" },
        { nhkId: "SV003", nhkName: "Tan thit Bo", nhkAge: 55, nhkClass:"K23CNT2" },
        { nhkId: "SV004", nhkName: "Hoàng Ngoc Thuy Duong", nhkAge:20, nhkClass:"K23CNT3"},
    ];
    //tao stade voi hook
    const [nhkStudents,setnhkStudents] = useState(listStudent);

    let nhkElement = nhkStudents.map((nhkItem,index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{nhkItem.nhkId}</td>
                <td>{nhkItem.nhkName}</td>
                <td>{nhkItem.nhkAge}</td>
                <td>{nhkItem.nhkClass}</td>
                <td>
                    <button>Sua</button>
                    <button>Xoa</button>
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sach Sinh Vien</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>nhkID</th>
                    <th>nhkName</th>
                    <th>nhkAge</th>
                    <th>nhkClass</th>
                    <th>Chuc nang</th>
                </tr>
            </thead>
            <tbody>
                {nhkElement}
            </tbody>
        </table>
    </div>
  )
}
