'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductDetailTable from '../../components/ProductDetailTable';
import { MdClose } from "react-icons/md";

export default function Productdtl() {
  const searchParams = useSearchParams();
  const ProductDtl = searchParams.get('productId');

  const [showForm, setShowForm] = useState(false);
  const [ProductDetail, setProductDetail] = useState({
    pId: "",
    key: "",
    value: "",
    addedAt: "",
    createdBy: "",
    updatedBy: ""
  });

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/productDetail', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pId: ProductDtl,
          key: ProductDetail.key,
          value: ProductDetail.value,
          addedAt: ProductDetail.addedAt,
          createdBy: ProductDetail.createdBy,
          updatedBy: ProductDetail.updatedBy
        })
      });

      if (res.ok) {
        alert('Product Detail created successfully');
        setProductDetail({
          pId: "",
          key: "",
          value: "",
          addedAt: "",
          createdBy: "",
          updatedBy: ""
        });
        setShowForm(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProductDetail((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Button */}
      <button
        className="mb-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        onClick={() => setShowForm(true)}
      >
        Add Product Detail
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-md w-full bg-white rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h1 className="text-lg font-semibold">Add Product Detail</h1>
              <button onClick={() => setShowForm(false)}>
                <MdClose className="w-6 h-6 text-white hover:text-gray-200" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleRegister} className="space-y-4">
                {/* Product Id */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product ID</label>
                  <div className="bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                    <strong>{ProductDtl}</strong>
                  </div>
                </div>

                {/* Key */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Key</label>
                  <input
                    name="key"
                    placeholder="Enter key"
                    value={ProductDetail.key}
                    onChange={handlechange}
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Value */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                  <input
                    name="value"
                    placeholder="Enter value"
                    value={ProductDetail.value}
                    onChange={handlechange}
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Added At */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Added At</label>
                  <input
                    name="addedAt"
                    placeholder="Enter timestamp"
                    value={ProductDetail.addedAt}
                    onChange={handlechange}
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Created By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Created By</label>
                  <input
                    name="createdBy"
                    placeholder="Enter creator name"
                    value={ProductDetail.createdBy}
                    onChange={handlechange}
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Updated By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Updated By</label>
                  <input
                    name="updatedBy"
                    placeholder="Enter updater name"
                    value={ProductDetail.updatedBy}
                    onChange={handlechange}
                    required
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
                >
                  Submit Product Detail
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-lg shadow-md p-6">
        <ProductDetailTable />
      </div>
    </div>
  );
}