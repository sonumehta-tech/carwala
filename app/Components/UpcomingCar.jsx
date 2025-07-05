'use client';

import Image from "next/image";
import { useState } from "react";
import { FaCar, FaRupeeSign } from "react-icons/fa";

const upcomingcars = [
    {
        name: "Kia Carens Clavis EV",
        price: " 22.00 - 26.00 Lakh",
        date: "15th Jul 2025",
        img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/174553/carens-clavis-ev-exterior-right-side-view-2.avif?isig=0&q=80",
    },
    {
        name: "MG M9 EV",
        price: " 60.00 - 70.00 Lakh",
        date: "Jul 2025",
        img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/139761/m9-ev-exterior-left-front-three-quarter-14.jpeg?isig=0&q=80",
    },
    {
        name: "MG Cyberster",
        price: " 60.00 - 70.00 Lakh",
        date: "Jul 2025 (Tentative)",
        img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/193375/cyberester-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
        name: "Mahindra XEV 7e",
        price: " 21.00 - 30.00 Lakh",
        date: "Aug 2025 (Tentative)",
        img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/131955/xuve8-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
];

const just_lunch = [
    {
        name: "Mercedes-Benz AMG GT",
        price: " 3.45 - 4.20 Crore",
        img:"https://imgd.aeplcdn.com/320x180/n/cw/ec/204994/amg-gt-63-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
        name: "Tata Harriar EV",
        price: " 25.07 - 35.23 Lakh",
        img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/139585/harrier-ev-exterior-right-front-three-quarter-18.jpeg?isig=0&q=80",
    },
    {
        name: "Volkswagen Golf GTI",
        price: " 61.40 Lakh",
        img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/198749/golf-gti-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
        name: "Kia Carens Clavis",
        price: " 13.19 - 24.91 Lakh",
        img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/195199/clavis-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    },
]

export default function UpcomingCars() {
    const [tab, setTab] = useState("upcoming");

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-4">
                Upcoming and Recently Launched Cars
            </h2>

            <div className="flex space-x-6 border-b">
                <button
                    onClick={() => setTab("upcoming")}
                    className={`pb-2 ${tab === "upcoming"
                            ? "border-b-2 border-lime-600 text-lime-700 font-medium"
                            : "text-gray-600"
                        }`}
                >
                    Upcoming Cars
                </button>
                <button
                    onClick={() => setTab("launched")}
                    className={`pb-2 ${tab === "launched"
                            ? "border-b-2 border-lime-600 text-lime-700 font-medium"
                            : "text-gray-600"
                        }`}
                >
                    Just Launched Cars
                </button>
            </div>

            {tab === "upcoming" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    {upcomingcars.map((car, idx) => (
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
                               <h3 className="font-medium flex items-center"><span className="me-3 text-lime-600" ><FaCar/></span>{car.name}</h3>
                                <p className="text-md text-gray-600 flex items-center"> <span className="text-sm text-black" ><FaRupeeSign/> </span>{car.price}</p>
                                <p className="text-sm text-gray-500">{car.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {tab === "launched" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    {just_lunch.map((car, idx) => (
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
                                <h3 className="font-medium flex items-center"><span className="me-3 text-lime-600" ><FaCar/></span>{car.name}</h3>
                                <p className="text-md text-gray-600 flex items-center"> <span className="text-sm text-black" ><FaRupeeSign/> </span>{car.price}</p>
                            </div>
                        </div>
                    ))}
                </div>)}

            <p className="text-sm text-gray-500 mt-4">
                Showing Estimated Prices
            </p>
            <button className="mt-2 text-lime-600 font-medium hover:underline">
                All Upcoming Cars &gt;
            </button>
        </div>
    );
}
