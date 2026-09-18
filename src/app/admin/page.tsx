"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { supabase } from "@/lib/supabase";
import ProductForm from "./ProductForm";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  async function fetchProducts() {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data, error } = await supabase.from("products").select("*").order("name");
    if (error) {
      console.error("Supabase error:", error);
    }
    if (data) setProducts(data as Product[]);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleAdd() {
    setEditingProduct(null);
    setShowForm(true);
  }

  function handleEdit(product: Product) {
    setEditingProduct(product);
    setShowForm(true);
  }

  function handleCancel() {
    setShowForm(false);
    setEditingProduct(null);
  }

  function handleSave() {
    setShowForm(false);
    setEditingProduct(null);
    fetchProducts();
  }

  async function handleDelete(id: string) {
    if (!supabase) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (!error) {
      setProducts(products.filter((p) => p.id !== id));
    }
    setDeleteConfirm(null);
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-primary">Loading products...</p>
      </div>
    );
  }

  if (!supabase) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-primary mb-4 uppercase">Admin - Products</h1>
        <p className="text-primary">Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your environment variables.</p>
      </div>
    );
  }

  if (showForm) {
    return (
      <ProductForm
        product={editingProduct}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-primary uppercase">Admin - Products</h1>
        <button
          onClick={handleAdd}
          className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-dark-rose transition-colors"
        >
          + Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <p className="text-primary text-center py-12">No products found.</p>
      ) : (
        <div className="bg-pink-50 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-pink-200">
              <tr>
                <th className="text-left p-3 text-primary text-sm font-bold">Image</th>
                <th className="text-left p-3 text-primary text-sm font-bold">Name</th>
                <th className="text-left p-3 text-primary text-sm font-bold">Brand</th>
                <th className="text-left p-3 text-primary text-sm font-bold">Category</th>
                <th className="text-left p-3 text-primary text-sm font-bold">Price</th>
                <th className="text-right p-3 text-primary text-sm font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-pink-200 hover:bg-pink-100">
                  <td className="p-3">
                    <div className="relative w-12 h-12 bg-pink-200 rounded overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-3 text-primary text-sm">{product.name}</td>
                  <td className="p-3 text-primary text-sm">{product.brand}</td>
                  <td className="p-3 text-primary text-sm">{product.category}</td>
                  <td className="p-3 text-primary text-sm">${product.price.toFixed(2)}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-primary hover:text-dark-rose font-bold text-sm mr-3"
                    >
                      Edit
                    </button>
                    {deleteConfirm === product.id ? (
                      <span className="text-sm">
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="text-red-500 hover:text-red-700 font-bold mr-2"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="text-gray-500 hover:text-gray-700 font-bold"
                        >
                          Cancel
                        </button>
                      </span>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(product.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-sm"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
