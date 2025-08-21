import Link from "next/link";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export default async function ProductsPage() {
  const products: Product[] = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => data.products);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block border rounded-lg p-4 hover:shadow-lg transition bg-white"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {product.description}
            </p>
            <p className="text-blue-600 font-semibold mt-2">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
