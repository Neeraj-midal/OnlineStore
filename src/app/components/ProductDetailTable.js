'use client';

import React, { useEffect, useState } from 'react';


const ProductDetailTable = () => {
  const [productDetaildata, setproductDetaildata] = useState([]);

  useEffect(() => {
    const gettingproductDtl = async () => {
      try {
        const res = await fetch('http://localhost:3000/getproductDetails');
        const data = await res.json();
        setproductDetaildata(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch product detail data:', error);
      }
    };
    gettingproductDtl();
  }, []);

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Product Detail List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Product ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Key
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Added At
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Created By
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Updated By
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productDetaildata.map((productDetail, index) => (
                <tr key={productDetail.id || index} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productDetail.pId}</td>
                  <td className="px-6 py-4 text-blue-600 text-sm">{productDetail.key}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productDetail.value}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productDetail.addedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productDetail.createdBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productDetail.updatedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTable;