'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type Props = {
  refreshTrigger?: any;
};

type MainCategory = {
  id: number | string;
  title: string;
  status: string;
};

const MainCategoryTable = ({ refreshTrigger }: Props) => {
  const [maincategorydata, setmaincategorydata] = useState<MainCategory[]>([]);

  useEffect(() => {
    const gettingmainData = async () => {
      try {
        const res = await fetch('http://localhost:3000/getMain');
        const data = await res.json();
        setmaincategorydata(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    gettingmainData();
  }, [refreshTrigger]);

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Main Category List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-xs font-large text-black uppercase tracking-wider">
                  Store ID
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
              {maincategorydata.map((maincategory, index) => (
                <tr key={maincategory.id || index} className="hover:bg-blue-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maincategory.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {maincategory.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{maincategory.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link href={`subchild?MaincategoryId=${maincategory.id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                        Add SubCategory
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

export default MainCategoryTable;