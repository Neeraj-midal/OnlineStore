'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import ProductTable from '../../components/ProductTable'
import { MdClose } from "react-icons/md";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const SubchildId = searchParams.get('SubchildId');

  const [showForm, setShowForm] = useState(false)

  const [projectdata, setprojectdata] = useState({
    title: "",
    imageUrl: "",
    price: "",
    realCost: "",
    sellingPrice: "",
    discount: "",
    status: "",
    subChildCategoryId: "",
    addedBy: ""
  });

  const router = useRouter();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/product', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: projectdata.title,
          imageUrl: projectdata.imageUrl,
          price: projectdata.price,
          realCost: projectdata.realCost,
          sellingPrice: projectdata.sellingPrice,
          discount: projectdata.discount,
          status: projectdata.status,
          subChildCategoryId: SubchildId,
          addedBy: projectdata.addedBy
        })
      });

      if (res.ok) {
        alert('Product created successfully ')
        setprojectdata({
          title: "",
          imageUrl: "",
          price: "",
          realCost: "",
          sellingPrice: "",
          discount: "",
          status: "",
          subChildCategoryId: "",
          addedBy: ""
        });
      }

    } catch (err) {
      console.error(err);
    }
  };

  async function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setprojectdata((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="p-6 bg-gray-100">
      {/* Form Card */}
      <button className="mb-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md" onClick={() => {
        setShowForm(true)
      }}>Add Product</button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-md w-full bg-white rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h1 className="text-lg font-semibold">Add Product Details</h1>
              <button onClick={() => setShowForm(false)}>
                <MdClose className="w-6 h-6 text-white hover:text-gray-200" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subchild ID</label>
                    <div className="bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                      <strong>{SubchildId}</strong>
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                      name="imageUrl"
                      placeholder="Enter image URL"
                      value={projectdata.imageUrl}
                      onChange={handlechange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                      name="price"
                      placeholder="Enter Price"
                      value={projectdata.price}
                      onChange={handlechange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>

                  {/* Real Cost */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Real Cost</label>
                    <input
                      name="realCost"
                      placeholder="Enter Real Cost"
                      value={projectdata.realCost}
                      onChange={handlechange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>
                </div>

                {/* Selling Price */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price</label>
                    <input
                      name="sellingPrice"
                      placeholder="Enter Selling Price"
                      value={projectdata.sellingPrice}
                      onChange={handlechange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>

                  {/* Discount */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Discount</label>
                    <input
                      name="discount"
                      placeholder="Enter Discount"
                      value={projectdata.discount}
                      onChange={handlechange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>
                </div>

                {/* Status */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <input
                      name="status"
                      placeholder="Enter Status"
                      value={projectdata.status}
                      onChange={handlechange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>

                  {/* Added By */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Added By</label>
                    <input
                      name="addedBy"
                      placeholder="Enter Your Name"
                      value={projectdata.addedBy}
                      onChange={handlechange}
                      required
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
                >
                  Submit Product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Product Table Below */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-lg shadow-md p-6">
        <ProductTable />
      </div>
    </div>
  );
}