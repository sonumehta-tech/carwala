"use client";

import Image from "next/image";
import Link from "next/link";

const brands = [
  { url:"/https://auto.mahindra.coms", name: "Maruti Suzuki", img: "/assets/suzuki.png" },
  { url:"/https://auto.mahindra.com", name: "Mahindra", img: "/assets/mahindra.png" },
  { url:"/https://auto.mahindra.com", name: "Tata", img: "/assets/tata.png" },
  { url:"/https://auto.mahindra.com", name: "Hyundai", img: "/assets/hundai.png" },
  { url:"/https://auto.mahindra.com", name: "Toyota", img: "/assets/toyota.png" },
  { url:"/https://auto.mahindra.com", name: "Kia", img: "/assets/kia.png" },
  { url:"/https://auto.mahindra.com", name: "BMW", img: "/assets/bmw.png" },
  { url:"/https://auto.mahindra.com", name: "Skoda", img: "/assets/skoda.png" },
  { url:"/https://auto.mahindra.com", name: "Mercedes-Benz", img: "/assets/mercerdiz.png" },
  { url:"/https://auto.mahindra.com", name: "Land Rover", img: "/assets/landrover.png" },
  { url:"/https://auto.mahindra.com/", name: "Volkswagen", img: "/assets/volksvagon.png" },
  { url:"/https://auto.mahindra.com", name: "Honda", img: "/assets/honda.png" },
];

export default function AllBrands() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">All Brands</h2>

      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 border rounded-xl p-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col items-center justify-center py-4 hover:shadow transition rounded"
          >
            <div className="relative w-16 h-16">
              <Link href={brand.url}>
               <Image
                src={brand.img}
                alt={brand.name}
                fill
                className="object-contain"
              />
              </Link>
            </div>
            <p className="mt-2 text-sm text-center">{brand.name}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm mt-4 text-gray-700 hover:underline cursor-pointer">
        View More Brands
      </p>
    </div>
  );
}
