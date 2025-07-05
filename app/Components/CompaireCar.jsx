'use client';

import Image from 'next/image';
import { FaCar, FaRupeeSign } from "react-icons/fa";


const comparisons = [
  {
    car1: {
      name: "Mahindra Scorpio N",
      price: " 16.19 Lakh onwards",
      img: "https://imgd.aeplcdn.com/227x128/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-77.avif?isig=0&q=80",
    },
    car2: {
      name: "Mahindra XUV700",
      price: " 16.60 Lakh onwards",
      img: "https://imgd.aeplcdn.com/227x128/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
  },
  {
    car1: {
      name: "Hyundai Creta",
      price: " 12.73 Lakh onwards",
      img: "https://imgd.aeplcdn.com/227x128/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    car2: {
      name: "Kia Seltos",
      price: " 12.84 Lakh onwards",
      img: "https://imgd.aeplcdn.com/227x128/n/cw/ec/174323/seltos-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
  },
  {
    car1: {
      name: "Mahindra XUV700",
      price: " 16.60 Lakh onwards",
      img: "https://imgd.aeplcdn.com/227x128/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
    car2: {
      name: "Tata Safari",
      price: " 17.72 Lakh onwards",
      img: "https://imgd.aeplcdn.com/227x128/n/cw/ec/138895/safari-facelift-exterior-right-front-three-quarter-39.jpeg?isig=0&q=80",
    },
  },
];

export default function CompareCars() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Compare Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {comparisons.map((pair, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="text-center">
                <Image
                  src={pair.car1.img}
                  alt={pair.car1.name}
                  width={120}
                  height={80}
                  className="mx-auto"
                />
                <p className="font-medium flex items-center"><span className='text-lime-600 text-sm me-2'><FaCar/></span>{pair.car2.name}</p>
                <p className="text-sm text-gray-600 flex items-center"><span className='text-black'><FaRupeeSign/></span>{pair.car2.price}</p>
              </div>
              <div className="text-sm font-semibold text-red-500">VS</div>
              <div className="text-center">
                <Image
                  src={pair.car2.img}
                  alt={pair.car2.name}
                  width={120}
                  height={80}
                  className="mx-auto"
                />
                <p className="font-medium flex items-center"><span className='text-lime-600 text-sm me-2'><FaCar/></span>{pair.car2.name}</p>
                <p className="text-sm text-gray-600 flex items-center"><span className='text-black'><FaRupeeSign/></span>{pair.car2.price}</p>
              </div>
            </div>
            <button className="mt-4 w-full border border-blue-500 text-blue-600 rounded-md py-1 hover:bg-blue-50">
              Compare Now
            </button>
          </div>
        ))}
      </div>

      <button className="mt-4 text-blue-600 font-medium hover:underline">
        Compare Cars of Your Choice &gt;
      </button>
    </div>
  );
}
