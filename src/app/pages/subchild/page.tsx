'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import SubchildTable from '../../components/Subchild';
import { MdClose } from "react-icons/md";

export default function Subpage() {
  const searchParams = useSearchParams();
  const MaincategoryId = searchParams.get('MaincategoryId');
  const [showForm, setShowForm] = useState(false);
  const [subchildData, setSubchildData] = useState({
    mainCategoryId: "",
    title: "",
    status: ""
  });
  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/subChildCategory', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mainCategoryId: MaincategoryId,
          title: subchildData.title,
          status: subchildData.status
        })
      });

      if (res.ok) {
        alert('Subchild created successfully');
        setSubchildData({
          mainCategoryId: "",
          title: "",
          status: ""
        });
        setShowForm(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setSubchildData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="p-6 bg-gray-100">
      {/* Add Subchild Button */}
      <button
        className="mb-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        onClick={() => setShowForm(true)}
      >
        Add Subchild
      </button>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg max-w-md w-full shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h1 className="text-lg font-semibold">Add Subchild Details</h1>
              <button onClick={() => setShowForm(false)}>
                <MdClose className="w-6 h-6 text-white hover:text-gray-200" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleRegister} className="space-y-4">
                {/* Maincategory ID Display */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Maincategory ID
                  </label>
                  <div className="bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                    <strong>{MaincategoryId}</strong>
                  </div>
                </div>

                {/* Title Input */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Subchild Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    placeholder="Enter Title"
                    value={subchildData.title}
                    onChange={handleChange}
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Status Input */}
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <input
                    id="status"
                    name="status"
                    placeholder="Enter Status"
                    value={subchildData.status}
                    onChange={handleChange}
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
                >
                  Submit Subchild
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-lg shadow-md p-6">
        <SubchildTable />
      </div>
    </div>
  );
}