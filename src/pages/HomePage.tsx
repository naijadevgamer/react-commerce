import BrandShowcase from "@/components/BrandShowcase";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import FAQ from "@/components/FAQ";
import Heroes from "@/components/Heroes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Heroes />
      <BrandShowcase />
      <Categories />
      <NewArrivals />
      <FAQ />
      <Footer />
    </main>
  );
};

export default HomePage;
