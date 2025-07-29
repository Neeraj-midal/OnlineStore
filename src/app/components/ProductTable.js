'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';



const ProductTable = () => {
  const [productdata, setproductdata] = useState([]);

  useEffect(() => {
    const gettingproduct = async () => {
      try {
        const res = await fetch('http://localhost:3000/getProduct');
        const data = await res.json();
        setproductdata(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch product data:', error);
      }
    };
    gettingproduct();
  }, []);

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Product List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Image URL
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Real Cost
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Selling Price
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Discount
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  MainCat ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  SubChildCat ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black  uppercase tracking-wider">
                  Added By
                </th>
                <th className="px-6 py-4 text-center text-xs font-large text-black  uppercase tracking-wider">
                  Add Image
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productdata.map((product, index) => (
                <tr key={product.id || index} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.title}</td>
                  <td className="px-6 py-4 text-blue-600 max-w-[180px] truncate text-sm">{product.imageUrl}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{product.realCost}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{product.sellingPrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{product.discount}%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.mainCategoryId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.subChildCategoryId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.addedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link href={`product-photo?productId=${product.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                        Add Photo
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;