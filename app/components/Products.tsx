// Products component: components/Products.tsx
"use client";
import { useState } from "react";
import ProductTable from "./products/ProductTable";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product A", price: 50, stock: 100 },
    { id: 2, name: "Product B", price: 30, stock: 200 },
  ]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAddClick = () => {
    const newProduct: Product = {
      id: Date.now(), // Or some other way to generate unique IDs
      name: "New Product",
      price: 40,
      stock: 50,
    };
    handleAddProduct(newProduct);
  };

  return (
    <section id="products" className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Products</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <ProductTable products={products} onDelete={handleDeleteProduct} />
        <button
          onClick={handleAddClick}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Product
        </button>
      </div>
    </section>
  );
}
