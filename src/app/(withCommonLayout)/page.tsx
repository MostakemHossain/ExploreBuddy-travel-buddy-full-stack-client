import GetFeaturedTravel from "@/components/GetFeaturedTravel/GetFeaturedTravel";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import KnowAboutUs from "@/components/KnowAboutUs/KnowAboutUs";

const Home = () => {
  return (
    <div>
      <GetFeaturedTravel />
      <KnowAboutUs />
      <ImageGallery />
    </div>
  );
};

export default Home;
