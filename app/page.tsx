import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default async function Home() {
  // Fetch featured products (limit to 8 for homepage)
  const products: Product[] = await fetch("https://dummyjson.com/products?limit=8")
    .then((res) => res.json())
    .then((data) => data.products);

  // Pick the first product as "featured" for hero section
  const featuredProduct = products[0];

  return (
    <main className="p-6">
      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Discover Premium <span className="text-yellow-300">Products</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg mb-8">
              Shop the latest trends at unbeatable prices. Fast delivery and top-notch quality you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/products"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Featured Image */}
          <div className="relative">
            <img
              src={featuredProduct.thumbnail}
              alt={featuredProduct.title}
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
              <p className="text-sm font-semibold">Top Pick</p>
              <p className="font-bold">{featuredProduct.title}</p>
              <p className="text-blue-600 font-bold">${featuredProduct.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Featured Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border rounded-lg shadow-sm hover:shadow-lg transition bg-white p-4 flex flex-col"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2 flex-1">
                {product.description}
              </p>
              <p className="text-blue-600 font-bold mt-3">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Call-to-Action */}
      <section className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to explore more?</h3>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse All Products
        </Link>
      </section>
    </main>
  );
}
