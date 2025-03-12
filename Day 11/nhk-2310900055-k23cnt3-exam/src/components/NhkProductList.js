import React from "react";

function NhkProductList({ products }) {
  return (
    <div className="w-full max-w-lg">
      <ul className="bg-white shadow-md rounded-md p-4">
        {products.map((product) => (
          <li key={product.nhkid} className="p-2 border-b last:border-none flex justify-between">
            <span className="font-bold">{product.nhkName}</span>
            <span className="text-gray-700">Số lượng: {product.nhkQuantity}</span>
            <span className="text-red-500 font-semibold">{product.nhkPrice.toLocaleString()} VND</span>
          </li>
        ))}
      </ul>
    </div>
);
}


export default NhkProductList;
