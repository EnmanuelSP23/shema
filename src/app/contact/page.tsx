"use client";

import { socialLinks } from "@/lib/config";
import { useState } from "react";

export default function ContactPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<"instagram" | "facebook">("instagram");

  const handleSendMessage = () => {
    const url = selectedPlatform === "instagram"
      ? `https://www.instagram.com/direct/new/?to=${socialLinks.instagram.split("/").filter(Boolean).pop()}`
      : socialLinks.facebook;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4 uppercase">Contact Us</h1>
          <p className="text-primary max-w-2xl mx-auto">
            Have questions about our products? Reach out to us on social media and we&apos;ll
            get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* How to Order */}
          <div className="bg-pink-50 rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold text-primary mb-6 uppercase">
              How to Order
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-primary">Browse Our Products</h3>
                  <p className="text-primary text-sm">
                    Explore our catalog and find the products you love.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-primary">Pick What You Love</h3>
                  <p className="text-primary text-sm">
                    Choose the items, shades, and quantities you want.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-primary">Message Us</h3>
                  <p className="text-primary text-sm">
                    Send us a message on Instagram or Facebook with your order.
                    We&apos;ll confirm availability and total cost.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-primary">We Confirm &amp; Deliver</h3>
                  <p className="text-primary text-sm">
                    Once payment is settled, we ship your order right to your door!
                  </p>
                </div>
              </div>
            </div>

            {/* Message Us CTA */}
            <div className="mt-8 pt-6 border-t border-pink-200">
              <h3 className="font-bold text-primary mb-4 uppercase text-center">
                Ready to Order?
              </h3>

              <div className="flex gap-3 justify-center mb-4">
                <button
                  onClick={() => setSelectedPlatform("instagram")}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${
                    selectedPlatform === "instagram"
                      ? "bg-primary text-white"
                      : "bg-pink-200 text-primary hover:bg-pink-300"
                  }`}
                >
                  Instagram
                </button>
                <button
                  onClick={() => setSelectedPlatform("facebook")}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${
                    selectedPlatform === "facebook"
                      ? "bg-primary text-white"
                      : "bg-pink-200 text-primary hover:bg-pink-300"
                  }`}
                >
                  Facebook
                </button>
              </div>

              <button
                onClick={handleSendMessage}
                className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-dark-rose transition-colors flex items-center justify-center gap-2"
              >
                {selectedPlatform === "instagram" ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                )}
                Message us on {selectedPlatform === "instagram" ? "Instagram" : "Facebook"}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-pink-50 rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold text-primary mb-6 uppercase">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Email</h3>
                    <p className="text-primary">Coming Soon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">WhatsApp</h3>
                    <p className="text-primary">Coming Soon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Location</h3>
                    <p className="text-primary">Online Store</p>
                    <p className="text-primary">Shipping Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-pink-50 rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold text-primary mb-6 uppercase">Follow Us</h2>
              <p className="text-primary mb-4">
                Stay connected and follow us on social media for the latest updates,
                promotions, and beauty tips.
              </p>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href={socialLinks.tiktok}
                  className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 10.86 4.44v-7.13a8.16 8.16 0 0 0 5.58 2.18v-3.44a4.85 4.85 0 0 1-3.77-1.77z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-pink-50 rounded-lg shadow-md p-8">
              <h2 className="text-xl font-bold text-primary mb-6 uppercase">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-primary">How long does shipping take?</h3>
                  <p className="text-primary text-sm">
                    Standard shipping takes 5-7 business days. Express shipping is available
                    for 2-3 day delivery.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary">Do you accept returns?</h3>
                  <p className="text-primary text-sm">
                    Yes! We accept returns within 30 days of purchase. Items must be unused
                    and in original packaging.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary">
                    Are all products authentic?
                  </h3>
                  <p className="text-primary text-sm">
                    Absolutely! We only sell 100% authentic products from authorized
                    distributors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
