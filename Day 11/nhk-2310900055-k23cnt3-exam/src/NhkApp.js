import React, { useState } from "react";
import NhkProductAdd from "./components/NhkProductAdd";
import NhkProductList from "./components/NhkProductList";
import logo from "./assets/Newlogo.png";


function NhkApp() {
  const [products, setProducts] = useState([
    { nhkid: "2310900055", nhkName: "Nguyễn Hong Kien", nhkQuantity: 1, nhkPrice: 100000000 },
    { nhkid: "002", nhkName: "Laptop Dell", nhkQuantity: 5, nhkPrice: 15000 },
    { nhkid: "003", nhkName: "Chuột Logitech", nhkQuantity: 10, nhkPrice: 500 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      
      <img src={logo} alt="Logo" className="w-24 h-24 mb-4" />

      <h1 className="text-2xl font-bold mb-4 text-blue-600">Danh sách sản phẩm</h1>
      <div >
      <NhkProductAdd onAdd={addProduct} />
      </div>
      <div >
      <NhkProductList products={products} />
      </div>
    </div>
  );
}

export default NhkApp;
