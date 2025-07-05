"use client"
import Image from "next/image";
import { useState } from "react";
import { FaCar, FaRupeeSign } from "react-icons/fa";


const carsData = {
  under10: [
    {
      name: "Maruti Fronx",
      price: " 7.54 - 13.06 Lakh",
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
    },
    {
      name: "Mahindra XUV 3XO",
      price: " 7.99 - 15.80 Lakh",
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-34.jpeg?isig=0&q=80"
    },
    {
      name: "Tata Nexon",
      price: " 8.00 - 15.60 Lakh",
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
    },
    {
      name: "Tata Altroz",
      price: " 6.89 - 11.49 Lakh",
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/199863/altroz-facelift-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
    },
  ],
  _10to20: [
    {
      name: "Mahindra Scorpio N",
      price: " 13.99 - 25.42 Lakh",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-77.avif?isig=0&q=80"
    },
    {
      name: "Mahindra XUV700",
      price: " 14.49 - 25.89 Lakh",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
    },
    {
      name: "Toyota Urban Cruiser",
      price: " 11.34 - 20.19 Lakh",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/124027/hyryder-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80"
    },
    {
      name: "Maruti Berezza",
      price: " 8.69 - 14.14 Lakh",
      img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80"
    },
  ]
  // you can add more categories here
};

export default function CarsByBudget() {
  const [activeTab, setActiveTab] = useState("under10");

  const tabs = [
    { id: "under10", label: "Cars Under 10 Lakh" },
    { id: "_10to20", label: "10 - 20 Lakh" },
    { id: "20to30", label: "20 - 30 Lakh" },
    { id: "luxury", label: "Luxury Cars" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="md:text-2xl text-sm font-semibold mb-4">Cars by Budget</h2>

      <div className="flex space-x-6 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-2 md:text-md text-sm ${activeTab === tab.id
                ? "text-lime-600 border-b-2 border-lime-600"
                : "text-gray-600"
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {carsData[activeTab]?.map((car) => (
          <div
            key={car.name}
            className="border rounded-lg shadow-sm hover:shadow-md transition p-3"
          > 
            <div className="relative h-32">
              <Image
                src={car.img}
                alt={car.name}
                fill
                className="rounded object-contain"
              />
            </div>

            <h3 className="font-medium flex items-center"><span className="me-3 text-lime-600" ><FaCar /></span>{car.name}</h3>
            <p className="text-md text-gray-600 flex items-center"> <span className="text-sm text-black" ><FaRupeeSign /> </span>{car.price}</p>
            <a
              href="#"
              className="text-blue-600 text-sm mt-1 inline-block px-2"
            >
              View Price Breakup
            </a>
          </div>
        )) || (
            <div className="text-gray-500 col-span-full">
              No cars in this category yet.
            </div>
          )}
      </div>
    </div>
  );
}
