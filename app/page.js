import AllBrands from "./Components/Carbrands";
import CarsByFuelType from "./Components/CarbyFuilType";
import CarsByBudget from "./Components/CarContainer";
import CarFilterBar from "./Components/CarfilterBar";
import MyCarousel from "./Components/Carousel";
import CompareCars from "./Components/CompaireCar";
import PopularCarsCarousel from "./Components/OfferCar";
import UpcomingCars from "./Components/UpcomingCar";

export default function Home() {
  return (
    <>
    <MyCarousel/>
    <CarsByBudget/>
    <PopularCarsCarousel/>
    <AllBrands/>
    <CarFilterBar/>
    <UpcomingCars/>
    <CarsByFuelType/>
    <CompareCars/>
    </>
    
  );
}
