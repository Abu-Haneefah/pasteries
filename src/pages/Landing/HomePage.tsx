import ConsultationSection from "./components/Consultation";
import BakeryFooter from "./components/Footer";
import BakeryHeroSection from "./components/Hero";
import OurStorySection from "./components/OurStory";
import SpecialtiesSection from "./components/Specialties";
import ClientStoriesSection from "./components/Testimonials";

function HomePage() {
  return (
    <>
      <BakeryHeroSection />
      <SpecialtiesSection />
      <OurStorySection />
      <ClientStoriesSection />
      <ConsultationSection />
      <BakeryFooter />
    </>
  );
}

export default HomePage;
