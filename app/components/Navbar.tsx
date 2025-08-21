"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const items = [
    { name: "home", url: "/" },
    { name: "products", url: "/products" },
    { name: "about", url: "/about" },
  ];

  return (
    <nav className="bg-gray-800 rounded-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-white">
          MyApp
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.url}
                href={item.url}
                className={`capitalize transition ${
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-blue-200"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
