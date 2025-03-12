import React, { useState } from "react";

function NhkProductAdd({ onAdd }) {
  const [newProduct, setNewProduct] = useState({
    nhkid: "",
    nhkName: "",
    nhkQuantity: 0,
    nhkPrice: 0,
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newProduct);
    setNewProduct({ nhkid: "", nhkName: "", nhkQuantity: 0, nhkPrice: 0 }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md mb-4">
      <div className="mb-2">
        <input type="text" name="nhkName" placeholder="Tên sản phẩm" value={newProduct.nhkName} onChange={handleChange} className="border p-2 w-full rounded" />
      </div>
      <div className="mb-2">
        <input type="number" name="nhkQuantity" placeholder="Số lượng" value={newProduct.nhkQuantity} onChange={handleChange} className="border p-2 w-full rounded" />
      </div>
      <div className="mb-2">
        <input type="number" name="nhkPrice" placeholder="Giá (VND)" value={newProduct.nhkPrice} onChange={handleChange} className="border p-2 w-full rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Thêm sản phẩm</button>
    </form>
  );
}

export default NhkProductAdd;
