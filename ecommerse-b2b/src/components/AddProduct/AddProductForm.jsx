import React, { useState } from "react";

const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productName, price, description });
    setProductName("");
    setPrice("");
    setDescription("");
  };

  const handleReset = () => {
    setProductName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          aria-label="Close"
          // onClick={onClose}
        >
          ✖
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              id="productName"
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter a unique and descriptive name for your product.
            </p>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price (₹) <span className="text-red-500">*</span>
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Specify the price in Indian Rupees.
            </p>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              placeholder="Describe your product"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
              rows="3"
              required
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              Provide a brief description to highlight product features.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400 shadow"
            >
              Reset
            </button>
            <div className="flex space-x-4">
              <button
                type="button"
                // onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400 shadow"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded shadow hover:bg-blue-600"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
