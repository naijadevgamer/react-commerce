import BrandShowcase from "@/components/BrandShowcase";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import FAQ from "@/components/FAQ";
import Heroes from "@/components/Heroes";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
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
