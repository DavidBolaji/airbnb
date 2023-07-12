import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import FilterComponent from "../components/FilterComponent";
import Footer from "../layouts/Footer";

const Root = () => {
  return (
    <>
      <header className="md:sticky top-0 z-30 fixed w-full">
        <Header />
      </header>

      <main>
        <div
          id="fill"
          className="md:sticky top-[80px] z-30 fixed md:drop-shadow-none -mt-8 md:mt-0"
        >
          <FilterComponent />
        </div>
        <Outlet />
      </main>

      <footer className="pb-7">
        <Footer />
      </footer>
    </>
  );
};

export default Root;
