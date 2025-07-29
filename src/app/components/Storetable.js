'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Storetable = () => {
  console.log("check table");
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const gettingStore = async () => {
      try {
        const res = await fetch('http://localhost:3000/getStore');
        const data = await res.json();
        console.log(data);
        setStoreData(data);
      } catch (err) {
        console.error('Error fetching store data:', err);
      }
    };
    gettingStore();
  }, []);

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Store List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Store Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Phone No.
                </th>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-center text-xs font-large text-black uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {storeData.map((store, index) => (
                <tr key={store.id || index} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{store.userId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {store.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{store.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{store.phoneNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{store.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link href={`maincategory?StoreId=${store.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                        Add Category
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

export default Storetable;