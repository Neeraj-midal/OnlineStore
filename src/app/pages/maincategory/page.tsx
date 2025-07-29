'use client';

import { useState } from "react";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import MainCategoryTable from '../../components/MainCategory'
import { MdClose } from "react-icons/md";

export default function StoreMaincategory() {
  const searchParams = useSearchParams();
  const StoreId = searchParams.get('StoreId');
  console.log(StoreId);

  const [showForm, setShowForm] = useState(false)

  const [maincategoryData, setmaincategoryData] = useState({
    storeId: "",
    title: "",
    status: ""
  })

  // const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/MainCategory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storeId: StoreId,
          title: maincategoryData.title,
          status: maincategoryData.status
        }),
      });
      if (res.ok) {
        alert('Store created successfully');
        setmaincategoryData({
          storeId: "",
          title: "",
          status: ""
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setmaincategoryData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="p-6 bg-gray-100">
      {/* Form Section */}
      <button className="mb-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md" onClick={() => {
        setShowForm(true)
      }}>Add Main Category</button>
      {showForm && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowForm(false)}></div>

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50">
            <div className="bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h1 className="text-lg font-semibold">Add Maincategory Details</h1>
                <button onClick={() => setShowForm(false)}>
                  <MdClose className="w-6 h-6 text-white hover:text-gray-200" />
                </button>
              </div>
              <div className="p-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  {/* Store ID Display */}
                  <div className="bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                    For Store ID: <strong>{StoreId}</strong>
                  </div>

                  {/* Title Input */}
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter title"
                    value={maincategoryData.title}
                    onChange={handlechange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />

                  {/* Status Input */}
                  <input
                    type="text"
                    name="status"
                    placeholder="Enter status"
                    value={maincategoryData.status}
                    onChange={handlechange}
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
                  >
                    Submit Maincategory
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Table Section */}
      <div className="max-w-7xl mx-auto mt-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <MainCategoryTable />
        </div>
      </div>
    </div>
  );
}