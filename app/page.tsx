import Navbar from "./navPAge/navbar";
import Carousel from "./navPAge/carousel";
import ClothList from "./navPAge/item-Container";
import Footer from "./navPAge/footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <Carousel/>
        <ClothList/>
        <Footer/>
      </div>
    </>
  );
}
