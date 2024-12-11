import Heroes from "@/components/Heroes";
import BrandShowcase from "@/components/BrandShowcase";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import FAQ from "@/components/FAQ";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Heroes />
      <BrandShowcase />
      <Categories />
      <NewArrivals />
      <FAQ />
    </main>
  );
};

export default HomePage;
