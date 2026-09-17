"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100">
        <div className="text-center">
          <svg
            className="w-24 h-24 text-pink-300 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-primary mb-4">Your Cart is Empty</h1>
          <p className="text-primary mb-6">
            Looks like you haven&apos;t added any products yet.
          </p>
          <Link
            href="/products"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8 uppercase">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-pink-50 rounded-lg shadow-md overflow-hidden">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-col sm:flex-row items-center gap-4 p-4 border-b border-pink-200 last:border-b-0"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 bg-pink-200 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow text-center sm:text-left">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">
                      {item.product.brand}
                    </p>
                    <h3 className="font-bold text-primary">{item.product.name}</h3>
                    <p className="text-sm text-primary">
                      {item.product.size} • {item.product.color}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-full border border-primary flex items-center justify-center hover:bg-pink-200 text-primary"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-primary">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-full border border-primary flex items-center justify-center hover:bg-pink-200 text-primary"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-primary">
                      ${item.product.price.toFixed(2)} each
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between items-center">
              <Link
                href="/products"
                className="text-primary hover:text-dark-rose underline font-bold"
              >
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 underline font-bold"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-pink-50 rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-primary mb-4 uppercase">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-primary">Subtotal</span>
                  <span className="font-bold text-primary">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Shipping</span>
                  <span className="font-bold text-green-600">Free</span>
                </div>
                <div className="border-t border-pink-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-primary">Total</span>
                    <span className="text-lg font-bold text-primary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-primary text-white py-3 rounded-full font-bold text-center hover:bg-dark-rose transition-colors"
              >
                Proceed to Checkout
              </Link>

              <div className="mt-4 text-center text-sm text-primary">
                <p>Pay with cash when your order arrives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
