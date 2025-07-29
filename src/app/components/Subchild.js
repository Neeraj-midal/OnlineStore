'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const SubchildTable = () => {
  const [subchilddata, setsubchilddata] = useState([]);

  useEffect(() => {
    const gettingSubchild = async () => {
      try {
        const res = await fetch('http://localhost:3000/getSubchild');
        const data = await res.json();
        setsubchilddata(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch subchild data:', error);
      }
    };
    gettingSubchild();
  }, []);

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Subchild Category List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  MainCategory ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-large text-black uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subchilddata.map((subchild, index) => (
                <tr key={subchild.id || index} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{subchild.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subchild.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{subchild.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link href={`product?SubchildId=${subchild.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                        Add Product
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

export default SubchildTable;