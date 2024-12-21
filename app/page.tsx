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
        <div className="pt-8 mt-1">
          <Search/>
          <div className="pt-0">
            <Carousel/>
            <ClothList/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
