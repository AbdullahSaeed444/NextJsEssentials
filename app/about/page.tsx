"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-2xl overflow-hidden mb-16">
        <div className="px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            About <span className="text-yellow-300">Our Store</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Bringing you the best products with unbeatable prices, curated for your lifestyle.
          </p>
        </div>
      </section>

      {/* ✅ Company Mission */}
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe in providing high-quality products at affordable prices. Our team works
            tirelessly to curate a wide range of products that cater to your everyday needs.
            Customer satisfaction is our top priority, and we ensure a seamless shopping experience
            with fast shipping and secure payments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From electronics to home essentials, we aim to be your go-to online marketplace.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1556742400-b5d3cb8383f3?auto=format&fit=crop&w=600&q=80"
            alt="Our Mission"
            className="rounded-lg shadow-lg object-cover w-full h-80"
          />
        </div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="bg-gray-100 p-8 rounded-2xl mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Top Quality</h3>
            <p className="text-gray-600">We source only the best products for our customers.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping, right to your doorstep.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Your transactions are always safe and protected.</p>
          </div>
        </div>
      </section>

      {/* ✅ Call-to-Action */}
      <section className="text-center">
        <h3 className="text-2xl font-bold mb-4">Want to explore our products?</h3>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </section>
    </main>
  );
}
