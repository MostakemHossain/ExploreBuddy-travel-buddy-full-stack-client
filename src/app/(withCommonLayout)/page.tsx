import ContactSection from "@/components/ContactUs/ContactUs";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import KnowAboutUs from "@/components/KnowAboutUs/KnowAboutUs";
import Banner from "../(withDashboardLayout)/dashboard/user/my-travel-request/components/Banner/Banner";
import GetFeaturedTravel from "@/components/GetFeaturedTravel/GetFeaturedTravel";

const Home = () => {
  return (
    <div>
      <Banner />
      <GetFeaturedTravel />
      <KnowAboutUs />
      <ImageGallery />
      <ContactSection />
    </div>
  );
};

export default Home;
