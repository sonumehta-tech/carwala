'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCar, FaRupeeSign } from "react-icons/fa";


const data = {
    electric: [
        {
            name: "Tata Harrier EV",
            price: " 25.07 - 35.23 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/139585/harrier-ev-exterior-right-front-three-quarter-18.jpeg?isig=0&q=80",
        },
        {
            name: "Mahindra BE 6",
            price: " 21.54 - 32.14 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/131825/be-6e-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
        },
        {
            name: "Mahindra XEV 9e",
            price: " 25.36 - 36.40 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/130595/xev-9e-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
        },
        {
            name: "Tata Nexon EV",
            price: " 14.22 - 19.62 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-79.jpeg?isig=0&q=80",
        },
    ],
    hybrid: [
        {
            name: "Toyota Urban Cruiser",
            price: " 12.81 - 23.22 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/124027/hyryder-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80",
        },
        {
            name: "Maruti Grand Vitara",
            price: " 12.90 - 23.14 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
        },
        {
            name: "Toyota Innova Hycros",
            price: " 22.80 - 37.97 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80",
        },
        {
            name: "Toyota Camry",
            price: " 55.49 - 56.41 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/192443/camry-exterior-right-front-three-quarter-14.jpeg?isig=0&q=80",
        },
    ],
    cng: [
        {
            name: "Toyota Urban Cruiser..",
            price: " 12.81 - 23.22 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/124027/hyryder-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80",
        },
        {
            name: "Maruti Brezza",
            price: " 9.94 - 15.69 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
        },
        {
            name: "Maruti Fronx",
            price: " 8.67 - 14.84 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-111.jpeg?isig=0&q=80",
        },
        {
            name: "Tata Nexon",
            price: " 9.13 - 17.71 Lakh",
            img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80",
        },
    ],
};

export default function CarsByFuelType() {
    const [tab, setTab] = useState('electric');

    const fuelTypes = [
        { key: 'electric', label: 'Electric Cars' },
        { key: 'hybrid', label: 'Hybrid Cars' },
        { key: 'cng', label: 'CNG Cars' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">Cars by Fuel Type</h2>

            <div className="flex space-x-6 border-b">
                {fuelTypes.map((fuel) => (
                    <button
                        key={fuel.key}
                        onClick={() => setTab(fuel.key)}
                        className={`pb-2 ${tab === fuel.key
                                ? 'border-b-2 border-lime-600 text-lime-700 font-medium'
                                : 'text-gray-600'
                            }`}
                    >
                        {fuel.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                {data[tab]?.length > 0 ? (
                    data[tab].map((car, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border hover:shadow-lg transition"
                        >
                            <Image
                                src={car.img}
                                alt={car.name}
                                width={400}
                                height={200}
                                className="rounded-t-xl"
                            />
                            <div className="p-4">
                                <h3 className="font-medium flex items-center"><span className="me-3 text-lime-600" ><FaCar /></span>{car.name}</h3>
                                <p className="text-md text-gray-600 flex items-center"> <span className="text-sm text-black" ><FaRupeeSign /> </span>{car.price}</p>
                                <button className="text-sm text-blue-600 font-medium mt-2">
                                    View Price Breakup
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full mt-4">No cars to show in this category.</p>
                )}
            </div>

            <p className="text-sm text-gray-500 mt-4">
                Showing On-Road Price, <span className="underline">Gurgaon</span> ✎
            </p>
            <button className="mt-2 text-lime-600 font-medium hover:underline">
                All {fuelTypes.find(f => f.key === tab)?.label} &gt;
            </button>
        </div>
    );
}
