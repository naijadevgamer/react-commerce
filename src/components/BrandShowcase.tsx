import sprite from "@/assets/sprite.svg";

const BrandShowcase = () => {
  return (
    <div className="">
      <svg
        className="fill-current aspect-square object-contain w-[192.756px] h-[192.756px]"
        aria-hidden="true"
      >
        <use xlinkHref={`${sprite}#gucci`} />
      </svg>

      <svg
        className="fill-current aspect-[3/2] object-contain w-[192.756px] h-[192.756px]"
        aria-hidden="true"
      >
        <use xlinkHref={`${sprite}#puma`} />
      </svg>
      <svg
        className="fill-current aspect-[3/2] object-contain w-[449.328px] h-[512px]"
        aria-hidden="true"
      >
        <use xlinkHref={`${sprite}#levi`} />
      </svg>
      <svg
        className="fill-current aspect-[3/2] object-contain w-[23.998665px] h-[20.052px]"
        aria-hidden="true"
      >
        <use xlinkHref={`${sprite}#adidas`} />
      </svg>
      <svg
        className="fill-current aspect-[3/2] object-contain w-[2516px] h-[594.4px]"
        aria-hidden="true"
      >
        <use xlinkHref={`${sprite}#zara`} />
      </svg>
      <svg
        className="fill-current aspect-[3/2] object-contain w-[240px] h-[180.04px]"
        aria-hidden="true"
      >
        <use xlinkHref={`${sprite}#under-armour`} />
      </svg>
    </div>
  );
};

export default BrandShowcase;
