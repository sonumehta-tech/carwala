"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaCar, FaRupeeSign } from "react-icons/fa";

const cars = [
  {
    name: "Nissan Magnite",
    price: " 6.14 Lakh onwards",
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/134287/city-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80"
  },
  {
    name: "Honda City",
    price: " 12.42 Lakh onwards",
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80"
  },
  {
    name: "Skoda Slavia",
    price: " 10.49 Lakh onwards",
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80"
  },
  {
    name: "Volkswagen Virtus",
    price: " 11.56 Lakh onwards",
    img: "https://imgd.aeplcdn.com/320x180/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-28.jpeg?isig=0&q=80"
  },
];

export default function PopularCarsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-12 py-6">
      <h2 className="text-xl font-semibold mb-4">Get Offers on Popular Cars</h2>

      <Slider {...settings} >
        {cars.map((car) => (
          <div
            key={car.name}
            className="p-2"
          >
            <div className="border rounded-xl p-3 shadow-sm hover:shadow-md transition">
              <div className="relative w-full h-32">
                <Image
                  src={car.img}
                  alt={car.name}
                  fill
                  className="rounded object-contain"
                />
              </div>
              <h3 className="font-medium flex items-center"><span className="me-3 text-lime-600" ><FaCar /></span>{car.name}</h3>
              <p className="text-md text-gray-600 flex items-center"> <span className="text-sm text-black" ><FaRupeeSign /> </span>{car.price}</p>
              <a href="#" className="text-blue-600 text-sm mt-1 inline-block">
                Check On Road Price
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
