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
<<<<<<< HEAD
        <div className="pt-8 mt-1">
          <Search/>
          <div className="pt-0">
            <Carousel/>
            <ClothList/>
          </div>
=======
        <div className="pt-12 mt-2">
        <Search/>
          <Carousel/>
          <ClothList/>
>>>>>>> e0c073c51a113c9e0a7c253eb8c2cebe37b2ff96
        </div>
        <Footer/>
      </div>
    </>
  );
}
