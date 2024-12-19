import Navbar from "./navPAge/navbar";
import Carousel from "./navPAge/carousel";
import ClothList from "./navPAge/item-Container";
import Footer from "./navPAge/footer";
import Search from "./navPAge/search";

export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <div className="pt-12 mt-2">
        <Search/>
          <Carousel/>
          <ClothList/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
