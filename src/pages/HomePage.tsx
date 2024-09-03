import { Button } from "@/components/ui/button";
import vid from "@/assets/video.mp4";
import vidWeb from "@/assets/video.mp4";
import BrandShowcase from "@/components/BrandShowcase";

const HomePage = () => {
  return (
    <main>
      {/* Display Section*/}
      <section className="w-full text-white h-[40rem] rounded-2xl relative text-accent-foreground-foreground overflow-hidden">
        {/* Backgroud*/}
        <div className="absolute top-0 left-0 h-full w-full brightness-50 overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay muted loop>
            <source src={vid} type="video/mp4" />
            <source src={vidWeb} type="video/webm" />
            Your browser is not supported
          </video>
        </div>
        {/* Texts */}
        <div className="px-10 lg:px-16 absolute bottom-0 w-full">
          <h1 className="capitalize text-center scroll-m-20 text-5xl mb-16 font-semibold tracking-tight lg:text-7xl">
            Elevate your elegance, elevate your style
          </h1>
          <div className="flex flex-col text-center sm:text-start gap-5 sm:gap-0 sm:flex-row items-center justify-between mb-16">
            <h3 className="text-xl lg:text-3xl max-w-[40rem] w-full sm:w-1/2 ">
              Discover timeless trends and express your unique style journey
            </h3>
            <Button className="rounded-3xl" asChild>
              <a href="/login">Explore now</a>
            </Button>
          </div>
        </div>
      </section>

      <BrandShowcase />
    </main>
  );
};

export default HomePage;
