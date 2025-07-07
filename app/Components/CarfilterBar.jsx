import { Wallet, Car, Zap, Leaf, Users, Settings } from "lucide-react";
import Link from "next/link";

export default function CarFilterBar() {
  return (
    <div className="bg-gray-50 rounded-xl max-w-7xl mx-auto px-4 py-8 space-y-2 ">
      <h2 className="text-xl font-semibold">Find The Cars Of Your Choice</h2>

      {/* Budget */}
      <div className="flex flex-wrap md:gap-5 gap-2 mt-10">
        <span className="text-gray-500 mr-2">Budget</span>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Wallet className="w-4 h-4" /> Under 5 Lakh
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Wallet className="w-4 h-4" /> Under 10 Lakh
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Wallet className="w-4 h-4" /> Under 15 Lakh
        </Link>
      </div>

      {/* Body Type */}
      <div className="flex flex-wrap md:gap-5 gap-2 mt-10">
        <span className="text-gray-500 mr-2">Body Type</span>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Car className="w-4 h-4" /> SUV
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Car className="w-4 h-4" /> Hatchback
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Car className="w-4 h-4" /> Sedan
        </Link>
      </div>

      {/* Fuel Type & Others */}
      <div className="flex flex-wrap md:gap-5 gap-2 mt-10">
        <span className="text-gray-500 mr-2">Fuel Type & Others</span>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Zap className="w-4 h-4" /> Electric
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Zap className="w-4 h-4" /> Hybrid
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Leaf className="w-4 h-4" /> CNG
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Users className="w-4 h-4" /> 7 Seater
        </Link>
        <Link href="/" className="flex items-center gap-1 border rounded px-3 py-1 hover:bg-gray-100">
          <Settings className="w-4 h-4" /> Automatic
        </Link>
      </div>

      <div className="mt-2">
        <Link href="/" className="text-blue-600 hover:underline">
          View More Filters &rarr;
        </Link>
      </div>
    </div>
  );
}
