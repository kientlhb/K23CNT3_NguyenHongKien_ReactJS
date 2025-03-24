import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom"; 
import axios from "axios"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"; 
 
export default function NhkListUsers() { 
  const [NhkListUsers, setNhkListUsers] = useState([]); 
  const NhkApiOnline = "https://67e106b758cc6bf78523ea53.mockapi.io/K23cnt3_NguyenHongKien/nguyenhongkiencnt3"; 
 
  useEffect(() => { 
    axios.get(NhkApiOnline)
      .then((response) => {
        console.log("Dữ liệu API:", response.data); // 🔥 Kiểm tra dữ liệu API
        setNhkListUsers(response.data);
      })
      .catch((error) => console.log("Lỗi:", error)); 
  }, []); 
 
  const NhkHandleDelete = (nhkId) => { 
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) { 
      axios.delete(`${NhkApiOnline}/${nhkId}`)
        .then(() => { 
          setNhkListUsers((prevUsers) => prevUsers.filter((user) => user.id !== nhkId)); // 🔥 Đảm bảo xóa đúng ID
        }) 
        .catch((error) => console.log("Lỗi khi xóa:", error)); 
    } 
  }; 
 
  return ( 
    <div className="container mt-4" 
      style={{ 
        backgroundImage: "url('https://img.freepik.com/free-vector/elegant-dynamic-flowing-wavy-line-blue-background_1017-56415.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        minHeight: "20vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
      }} 
    > 
      <div className="table-responsive"> 
        <table className="table table-bordered table-hover"> 
          <thead className="table-dark"> 
            <tr> 
              <th>ID</th> 
              <th>FullName</th> 
              <th>Age</th> 
              <th>Email</th> 
              <th>Phone</th> 
              <th>Active</th> 
              <th>Actions</th> 
            </tr> 
          </thead> 
          <tbody> 
            {NhkListUsers.map((Nhk_Item, index) => (
              <tr key={Nhk_Item.nhkId || Nhk_Item.id || index} className="animate__animated animate__fadeIn"> 
                <td>{Nhk_Item.nhkId || Nhk_Item.id}</td> 
                <td>{Nhk_Item.nhkFullName || "N/A"}</td> 
                <td>{Nhk_Item.nhkAge || "N/A"}</td> 
                <td>{Nhk_Item.nhkEmail || "N/A"}</td> 
                <td>{Nhk_Item.nhkPhone || "N/A"}</td> 
                <td> 
                  {Nhk_Item.nhkActive ? ( 
                    <span className="badge bg-success">Hoạt động</span> 
                  ) : ( 
                    <span className="badge bg-danger">Khóa</span> 
                  )} 
                </td> 
                <td> 
                  <Link to={`/edit/${Nhk_Item.nhkId || Nhk_Item.id}`} className="btn btn-primary btn-sm mx-1 animate__animated animate__pulse"> 
                    <FontAwesomeIcon icon={faEdit} /> 
                  </Link> 
                  <button onClick={() => NhkHandleDelete(Nhk_Item.nhkId || Nhk_Item.id)} 
                    className="btn btn-danger btn-sm mx-1 animate__animated animate__shakeX"> 
                    <FontAwesomeIcon icon={faTrash} /> 
                  </button> 
                </td> 
              </tr> 
            ))} 
          </tbody> 
        </table> 
      </div> 
    </div> 
  ); 
}
