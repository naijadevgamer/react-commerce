import man from "@/assets/man.jpg";
import { ArrowRight } from "lucide-react";

const NewArrivals = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="font-audiowide flex items-center justify-between gap-x-3">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h2>

          <a className="flex items-center gap-x-1 text-primary" href="/all">
            See All{" "}
            <span>
              <ArrowRight className="w-5" />
            </span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* {data.map((product) => (
            // <ProductCard product={product} />
          ))} */}
          <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={man}
                alt="Product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  <a href={`/product}`}>Clothe</a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$34</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={man}
                alt="Product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  <a href={`/product}`}>Clothe</a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$34</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={man}
                alt="Product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  <a href={`/product}`}>Clothe</a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$34</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={man}
                alt="Product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  <a href={`/product}`}>Clothe</a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$34</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={man}
                alt="Product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  <a href={`/product}`}>Clothe</a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$34</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={man}
                alt="Product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  <a href={`/product}`}>Clothe</a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$34</p>
            </div>
          </div>

          <div className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <img
                src={man}
                alt="Product image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  <a href={`/product}`}>Clothe</a>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">$34</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
