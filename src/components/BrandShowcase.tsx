import gucci from "@/assets/gucci.svg";
import levi from "@/assets/levi.svg";
import nike from "@/assets/nike.svg";
import underArmour from "@/assets/under-armour.svg";
import adidas from "@/assets/adidas.svg";
import zara from "@/assets/zara.svg";

const BrandShowcase = () => {
  return (
    <div className="w-full my-20 flex items-center relative mr-20">
      <div className="marquee-inner flex justify-between w-full absolute mr-8 duration-1000">
        <img className="logo" src={gucci} alt="Gucci logo" />
        <img className="logo" src={levi} alt="Levi logo" />
        <img className="logo" src={underArmour} alt="Under Armour logo" />
        <img className="logo" src={nike} alt="Nike logo" />
        <img className="logo" src={adidas} alt="Adidas logo" />
        <img className="logo" src={zara} alt="Zara logo" />
      </div>
      <div className="marquee-inner flex justify-between w-full absolute -right-[109%] duration-1000">
        <img className="logo" src={gucci} alt="Gucci logo" />
        <img className="logo" src={levi} alt="Levi logo" />
        <img className="logo" src={underArmour} alt="Under Armour logo" />
        <img className="logo" src={nike} alt="Nike logo" />
        <img className="logo" src={adidas} alt="Adidas logo" />
        <img className="logo" src={zara} alt="Zara logo" />
      </div>
    </div>
  );
};

export default BrandShowcase;
