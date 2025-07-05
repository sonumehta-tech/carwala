import AllBrands from "./Components/Carbrands";
import CarsByBudget from "./Components/CarContainer";
import CarFilterBar from "./Components/CarfilterBar";
import MyCarousel from "./Components/Carousel";
import Header from "./Components/Header";
import PopularCarsCarousel from "./Components/OfferCar";

export default function Home() {
  return (
    <>
    <Header/>
    <MyCarousel/>
    <CarsByBudget/>
    <PopularCarsCarousel/>
    <AllBrands/>
    <CarFilterBar/>
    </>
    
  );
}
