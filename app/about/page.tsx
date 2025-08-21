"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  console.log("About Page Loaded");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold underline text-blue-500 py-6">
        About Page
      </h1>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, fugiat!
      </p>

      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer hover:bg-blue-600 transition"
      >
        Go To Home
      </button>
    </div>
  );
}
