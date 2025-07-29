'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Storetable from '../../components/Storetable';
import { MdClose } from 'react-icons/md';

export default function StorePage() {
  const [showForm, setShowForm] = useState(false);
  const [storeData, setStoreData] = useState({
    userId: '',
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
  });

  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/StoreDetail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(storeData),
      });
      if (res.ok) {
        alert('Store created successfully');
        setStoreData({
          userId: '',
          name: '',
          email: '',
          phoneNumber: '',
          location: '',
        });
        setShowForm(false); 
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setStoreData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Add Store Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        Add Store
      </button>

      {/* Form Modal */}
      {showForm && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowForm(false)}></div>

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50">
            <div className="bg-white rounded-lg shadow-md">
              <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                <h2 className="text-lg font-semibold">Add Store Details</h2>
                <button onClick={() => setShowForm(false)}>
                  <MdClose className="w-6 h-6 text-white hover:text-gray-200" />
                </button>
              </div>
              <div className="p-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  {/* User ID */}
                  <div>
                    <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                      User ID
                    </label>
                    <input
                      id="userId"
                      name="userId"
                      placeholder="Enter User ID"
                      value={storeData.userId}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>

                  {/* Store Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Store Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Enter Store Name"
                      value={storeData.name}
                      onChange={handleChange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Store Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      value={storeData.email}
                      onChange={handleChange}
                      required
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter Phone Number"
                      value={storeData.phoneNumber}
                      onChange={handleChange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      placeholder="Enter Store Location"
                      value={storeData.location}
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
                    Submit Store
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Store Table */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Storetable />
        </div>
      </div>
    </div>
  );
}