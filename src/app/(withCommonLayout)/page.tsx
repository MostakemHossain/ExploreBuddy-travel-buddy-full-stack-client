import ContactSection from "@/components/ContactUs/ContactUs";
import GetFeaturedTravel from "@/components/GetFeaturedTravel/GetFeaturedTravel";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import KnowAboutUs from "@/components/KnowAboutUs/KnowAboutUs";
import Banner from "../(withDashboardLayout)/dashboard/user/my-travel-request/components/Banner/Banner";

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
