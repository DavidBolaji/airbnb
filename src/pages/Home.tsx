import React from "react";
// import FilterSwitchComponent from "../components/FilterSwitchComponent";
import Product from "../layouts/Product";

const Home: React.FC = () => {
  return (
    <div className="px-10 relative">
      {/* <FilterSwitchComponent /> */}
      <Product />
    </div>
  );
};

export default Home;
