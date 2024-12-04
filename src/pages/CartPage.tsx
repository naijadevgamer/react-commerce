import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-6 w-full max-w-lg px-2 sm:max-w-lg">
        <h1 className="text-center text-3xl font-semibold">Shopping Cart</h1>

        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1">
            <ul className="divide-y divide-gray-200">
              {/* <h1 className="py-6">You dont have any items</h1> */}

              <li className="flex py-6">
                <div className="size-12 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"></div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>Clothe name</h3>
                      <p className="ml-4">$310</p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="flex items-center text-gray-500">
                      QTY:
                      <button>
                        <ChevronLeft className="hover:text-gray-600" />
                      </button>
                      4
                      <button>
                        <ChevronRight className="hover:text-gray-600" />
                      </button>
                    </p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-primary hover:text-primary/80"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex py-6">
                <div className="size-12 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"></div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>Clothe name</h3>
                      <p className="ml-4">$310</p>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique nemo nisi ipsam! Culpa harum perspiciatis neque
                      a officia repellendus consequuntur architecto nobis,
                      facere saepe eius, iste ratione, minus rerum laboriosam?
                    </p>
                  </div>

                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="flex items-center text-gray-500">
                      QTY:
                      <button>
                        <ChevronLeft className="hover:text-gray-600" />
                      </button>
                      4
                      <button>
                        <ChevronRight className="hover:text-gray-600" />
                      </button>
                    </p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-primary hover:text-primary/80"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex py-6">
                <div className="size-12 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"></div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>Clothe name</h3>
                      <p className="ml-4">$310</p>
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique nemo nisi ipsam! Culpa harum perspiciatis neque
                      a officia repellendus consequuntur architecto nobis,
                      facere saepe eius, iste ratione, minus rerum laboriosam?
                    </p>
                  </div>

                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="flex items-center text-gray-500">
                      QTY:
                      <button>
                        <ChevronLeft className="hover:text-gray-600" />
                      </button>
                      4
                      <button>
                        <ChevronRight className="hover:text-gray-600" />
                      </button>
                    </p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-primary hover:text-primary/80"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>$310</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button className="w-full">Checkout</Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button className="font-medium text-primary hover:text-primary/80">
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
