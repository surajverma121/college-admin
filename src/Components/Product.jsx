import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([
    { field1: "Product 1", field2: "Category 1", field3: "Description 1" },
    { field1: "Product 2", field2: "Category 2", field3: "Description 2" },
    { field1: "Product 3", field2: "Category 3", field3: "Description 3" },
    { field1: "Product 4", field2: "Category 4", field3: "Description 4" },
    { field1: "Product 5", field2: "Category 5", field3: "Description 5" },
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleSaveProduct = () => {
    if (!formData.field1 || !formData.field2 || !formData.field3) {
      alert("Please fill all fields before saving!");
      return;
    }

    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = formData;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      setProducts([...products, formData]);
    }

    setFormData({ field1: "", field2: "", field3: "" });
    setSidebarOpen(false);
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleEditProduct = (index) => {
    setFormData(products[index]);
    setEditingIndex(index);
    setSidebarOpen(true);
  };

  return (
    <div className="  flex flex-col  items-center p-4">
      {/* Search Bar */}
      <div className="w-full flex flex-col justify-between max-w-sm mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          onClick={() => setSidebarOpen(true)}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Product
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) =>
                product.field1.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {product.field1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.field2}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.field3}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="text-blue-500 mr-2"
                      onClick={() => handleEditProduct(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteProduct(index)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
          <div className="bg-white w-96 p-6 shadow-lg h-full overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSaveProduct();
              }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col">
                <label htmlFor="field1" className="text-sm font-medium">
                  Product Name
                </label>
                <input
                  id="field1"
                  type="text"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                  value={formData.field1}
                  onChange={(e) =>
                    setFormData({ ...formData, field1: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="field2" className="text-sm font-medium">
                  Category
                </label>
                <input
                  id="field2"
                  type="text"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                  value={formData.field2}
                  onChange={(e) =>
                    setFormData({ ...formData, field2: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="field3" className="text-sm font-medium">
                  Description
                </label>
                <input
                  id="field3"
                  type="text"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                  value={formData.field3}
                  onChange={(e) =>
                    setFormData({ ...formData, field3: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
              >
                Save Product
              </button>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="w-full bg-gray-300 text-gray-700 px-4 py-2 mt-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
