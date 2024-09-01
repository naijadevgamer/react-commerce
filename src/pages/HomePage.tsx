import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <main>
      <div className="w-full h-[40rem] bg-red-300 rounded-2xl relative text-accent-foreground-foreground">
        {/* Backgroud*/}
        {/* Texts */}
        <div className="px-16 absolute bottom-0 w-full">
          <h1 className="capitalize text-center scroll-m-20 text-4xl mb-16 font-bold tracking-tight  lg:text-5xl">
            Elevate your elegance, elevate your style
          </h1>
          <div className="flex items-center justify-between mb-16">
            <h3>
              Discover timeless trends and express your unique style journey
            </h3>
            <Button className="rounded-3xl" asChild>
              <a href="/login">Explore now</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
