import { Outlet } from "react-router-dom";

const ShopPage = () => {
  return (
    <div>
      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
};

export default ShopPage;
