'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';



const ProductImageTable = () => {
  const [productImagedata, setproductImagedata] = useState([]);

  useEffect(() => {
    const gettingproductImg = async () => {
      try {
        const res = await fetch('http://localhost:3000/getproductImage');
        const data = await res.json();
        setproductImagedata(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch product image data:', error);
      }
    };
    gettingproductImg();
  }, []);

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Product Image List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Product ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Image Path
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Created By
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Updated By
                </th>
                <th className="px-6 py-4 text-center text-xs font-large text-black uppercase tracking-wider">
                  Add Detail
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productImagedata.map((productImage, index) => (
                <tr key={productImage.id || index} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productImage.pId}</td>
                  <td className="px-6 py-4 text-blue-600 max-w-[250px] truncate text-sm">{productImage.imagePath}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productImage.createdBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{productImage.updatedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link href={`product-details?productId=${productImage.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                        Add Detail
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

export default ProductImageTable;