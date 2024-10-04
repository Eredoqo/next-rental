import AboutSection from "./components/about/About";
import HeroSlider from "./components/hero/HeroSlider";
import ServicesList from "./components/service/ServicesList";
import CarGallery from "./components/car-gallery/car-gallery/CarGallery";
import Testimonial from "./components/testimonials/Testimonial";
import BlogList from "./components/blog/blog-list/BlogList";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesList />
      <CarGallery />
      <Testimonial />
      <BlogList />
    </div>
  );
}
