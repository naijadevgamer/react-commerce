import man from "@/assets/man.jpg";
const Categories = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 h-[40rem] bg-red-200">
      <figure>
        <img src={man} alt="" />
      </figure>
      <figure>
        <img src={man} alt="" />
      </figure>
      <figure>
        <img src={man} alt="" />
      </figure>
    </div>
  );
};

export default Categories;
