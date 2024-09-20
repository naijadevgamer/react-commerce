import gucci from "@/assets/gucci.svg";
import levi from "@/assets/levi.svg";
import nike from "@/assets/nike.svg";
import underArmour from "@/assets/under-armour.svg";
import adidas from "@/assets/adidas.svg";
import zara from "@/assets/zara.svg";

const BrandShowcase = () => {
  return (
    <div className="relative my-20 mr-20 flex w-[60rem] items-center md:w-[90rem]">
      <div className="marquee-inner absolute mr-8 flex w-full justify-between duration-1000">
        <img className="logo" src={gucci} alt="Gucci logo" />
        <img className="logo" src={levi} alt="Levi logo" />
        <img className="logo" src={underArmour} alt="Under Armour logo" />
        <img className="logo" src={nike} alt="Nike logo" />
        <img className="logo" src={adidas} alt="Adidas logo" />
        <img className="logo" src={zara} alt="Zara logo" />
      </div>
      <div className="marquee-inner absolute -right-[109%] flex w-full justify-between duration-1000">
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
