'use client';
import { useState } from "react"; 
import { useSearchParams } from "next/navigation"; 
import ProductImageTable from '../../components/ProductImageTable'
import { MdClose } from "react-icons/md";
export default function ProductImage() {
  const searchParams = useSearchParams()  
    const productImg = searchParams.get('productId')
  const [showForm, setShowForm] = useState(false)
  const [ProductImage, setProductImage] = useState({
    pId: "",
    imagePath: "",
    createdBy: "",
    updatedBy: ""
  });

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/productImage', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pId: productImg,
          imagePath: ProductImage.imagePath,
          createdBy: ProductImage.createdBy,
          updatedBy: ProductImage.updatedBy
        })
      });

      if (res.ok) {
        alert('ProductImage created successfully ')
        setProductImage({
          pId: "",
          imagePath: "",
          createdBy: "",
          updatedBy: ""
        });
      }
    }
    catch (err) {
      console.error(err);
    }
  };

  async function handlechange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setProductImage((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="p-6 bg-gray-100">
      {/* Form Card */}
      <button className="mb-6 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md" onClick={() => {
        setShowForm(true)
      }}>Add Product Image</button>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative max-w-md w-full bg-white rounded-lg shadow-md">
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h1 className="text-lg font-semibold">Add Product Image Details</h1>
              <button onClick={() => setShowForm(false)}>
                <MdClose className="w-6 h-6 text-white hover:text-gray-200" />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleRegister} className="space-y-4">
                {/* Product Image ID Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product ID</label>
                  <div className="bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 text-sm">
                    <strong>{productImg}</strong>
                  </div>
                </div>

                {/* Image Path */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image Path</label>
                  <input
                    type="text"
                    name="imagePath"
                    value={ProductImage.imagePath}
                    onChange={handlechange}
                    placeholder="Enter Image Path"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Created By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Created By</label>
                  <input
                    type="text"
                    name="createdBy"
                    value={ProductImage.createdBy}
                    onChange={handlechange}
                    placeholder="Enter Creator"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Updated By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Updated By</label>
                  <input
                    type="text"
                    name="updatedBy"
                    value={ProductImage.updatedBy}
                    onChange={handlechange}
                    placeholder="Enter Updater"
                    required
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
                >
                  Submit Product Image
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Product Image Table Below */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-lg shadow-md p-6">
        <ProductImageTable />
      </div>
    </div>
  );

}