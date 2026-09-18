"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { supabase } from "@/lib/supabase";

const categories = [
  "Lip Gloss",
  "Lip Stain",
  "Lip Care",
  "Contour",
  "Mascara",
  "Eyeliner",
  "Blush",
  "Foundation",
  "Body Care",
  "Fragrance",
  "Accessories",
  "Apparel",
  "Gift Set",
];

const brands = [
  "Sephora Collection",
  "Victoria's Secret",
  "Juicy Couture",
  "Givenchy",
  "Dolce & Gabbana",
];

interface ProductFormProps {
  product: Product | null;
  onSave: () => void;
  onCancel: () => void;
}

export default function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState({
    id: product?.id || "",
    brand: product?.brand || "",
    name: product?.name || "",
    size: product?.size || "",
    color: product?.color || "",
    price: product?.price || 0,
    category: product?.category || categories[0],
    image: product?.image || "",
    description: product?.description || "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(product?.image || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function generateId(brand: string, name: string): string {
    return `${brand}-${name}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  async function uploadImage(file: File): Promise<string | null> {
    if (!supabase) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `products/${fileName}`;

    const { error } = await supabase.storage
      .from("product-images")
      .upload(filePath, file);

    if (error) {
      console.error("Upload error:", error);
      return null;
    }

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(filePath);

    return data.publicUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) {
      setError("Supabase is not configured");
      return;
    }
    setSaving(true);
    setError("");

    let imageUrl = formData.image;

    if (imageFile) {
      const uploaded = await uploadImage(imageFile);
      if (!uploaded) {
        setError("Failed to upload image");
        setSaving(false);
        return;
      }
      imageUrl = uploaded;
    }

    const productData = {
      ...formData,
      id: product ? product.id : generateId(formData.brand, formData.name),
      image: imageUrl,
    };

    if (product) {
      const { error } = await supabase
        .from("products")
        .update(productData)
        .eq("id", product.id);
      if (error) {
        setError(error.message);
        setSaving(false);
        return;
      }
    } else {
      const { error } = await supabase
        .from("products")
        .insert(productData);
      if (error) {
        setError(error.message);
        setSaving(false);
        return;
      }
    }

    onSave();
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary uppercase">
          {product ? "Edit Product" : "Add Product"}
        </h1>
        <button
          onClick={onCancel}
          className="text-primary hover:text-dark-rose font-bold self-start"
        >
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-pink-50 p-4 sm:p-6 rounded-lg max-w-2xl">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">{error}</div>
        )}

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-primary mb-2">Product Image</label>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {imagePreview && (
              <div className="relative w-full sm:w-32 h-48 sm:h-32 bg-pink-200 rounded overflow-hidden">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-pink-200 text-primary px-4 py-2 rounded font-bold hover:bg-pink-300 transition-colors text-sm w-full sm:w-auto"
              >
                {imagePreview ? "Change Image" : "Upload Image"}
              </button>
              <p className="text-xs text-primary mt-1">JPG, PNG, or WebP</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Brand */}
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
              list="brands-list"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Select or type a brand"
            />
            <datalist id="brands-list">
              {brands.map((b) => (
                <option key={b} value={b} />
              ))}
            </datalist>
          </div>

          {/* Name */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Size</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g. 0.2 FL OZ"
            />
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g. #03 Flame"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Price (USD)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              list="categories-list"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Select or type a category"
            />
            <datalist id="categories-list">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-primary mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={saving}
            className="bg-primary text-white px-8 py-2 rounded-lg font-bold hover:bg-dark-rose transition-colors disabled:opacity-50 w-full sm:w-auto"
          >
            {saving ? "Saving..." : product ? "Update Product" : "Add Product"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-pink-200 text-primary px-8 py-2 rounded-lg font-bold hover:bg-pink-300 transition-colors w-full sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
