import { Button } from "@/components/ui/button";
import vid from "@/assets/video.mp4";
import vidWeb from "@/assets/video.mp4";
import BrandShowcase from "@/components/BrandShowcase";
import Categories from "@/components/Categories";
import NewArrivals from "@/components/NewArrivals";
import FAQ from "@/components/FAQ";

const HomePage = () => {
  return (
    <main className="overflow-hidden px-8 md:px-12 lg:px-20">
      {/* Display Section*/}
      <section className="text-accent-foreground-foreground relative h-[40rem] w-full overflow-hidden rounded-2xl text-white">
        {/* Backgroud*/}
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden brightness-50">
          <video className="h-full w-full object-cover" autoPlay muted loop>
            <source src={vid} type="video/mp4" />
            <source src={vidWeb} type="video/webm" />
            Your browser is not supported
          </video>
        </div>
        {/* Texts */}
        <div className="absolute bottom-0 w-full px-10 lg:px-16">
          <h1 className="font-audiowide mb-16 scroll-m-20 text-center text-5xl font-semibold capitalize tracking-tight lg:text-7xl">
            Elevate your elegance, elevate your style
          </h1>
          <div className="mb-16 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:gap-0 sm:text-start">
            <h3 className="font-montserratAlt w-full max-w-[40rem] text-xl sm:w-1/2 lg:text-3xl">
              Discover timeless trends and express your unique style journey
            </h3>
            <Button className="font-audiowide rounded-3xl" asChild>
              <a href="/login">Explore now</a>
            </Button>
          </div>
        </div>
      </section>
      <BrandShowcase />
      <Categories />
      <NewArrivals />
      <FAQ />
    </main>
  );
};

export default HomePage;
