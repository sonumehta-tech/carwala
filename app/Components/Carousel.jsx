'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

 const MyCarousel = () => {
  return (
    <div className="w-full mx-auto md:mt-12 mt-4">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        swipeable
        emulateTouch
      >
        {/* Slide 1 */}
        <div className="relative md:h-[100vh] h-[40vh] w-full">
          <Image
            src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg"
            alt="pexels-photo"
            fill
            className="object-contain md:object-cover rounded-md"
          />
        </div>

        {/* Slide 2 */}
        <div className="relative md:h-[100vh] h-[40vh]">
          <Image
            src="https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg"
            alt="Slide 2"
            fill
            className="object-contain md:object-cover rounded-md"
          />
        </div>

        {/* Slide 3 */}
        <div className="relative md:h-[100vh] h-[40vh]">
          <Image
            src="https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg"
            alt="Slide 3"
            fill
            className="object-contain md:object-cover rounded-md"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
