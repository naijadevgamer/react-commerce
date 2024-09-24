import { Button } from "@/components/ui/button";
import vid from "@/assets/video.mp4";
import vidWeb from "@/assets/video.mp4";

const Heroes = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <div className="text-accent-foreground-foreground relative h-[40rem] w-full overflow-hidden rounded-2xl text-white">
        {/* Backgroud*/}
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden brightness-50">
          <video className="h-full w-full object-cover" autoPlay muted loop>
            <source src={vid} type="video/mp4" />
            <source src={vidWeb} type="video/webm" />
            Your browser is not supported
          </video>
        </div>
        {/* Texts */}
        <div className="absolute bottom-0 w-full px-4 lg:px-16">
          <h1 className="mb-16 scroll-m-20 text-center font-audiowide text-4xl font-semibold capitalize tracking-tight md:text-7xl">
            Elevate your elegance, elevate your style
          </h1>
          <div className="mb-16 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:gap-0 sm:text-start">
            <h3 className="w-full max-w-[40rem] font-montserratAlt text-xl sm:w-1/2 lg:text-3xl">
              Discover timeless trends and express your unique style journey
            </h3>
            <Button className="rounded-3xl font-audiowide" asChild>
              <a href="/login">Explore now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroes;
