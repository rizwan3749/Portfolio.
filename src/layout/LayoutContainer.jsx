import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css"

const LayoutContainer = () => {
  return (
    <div className="bg-errie-black min-h-screen no-scrollbar">
      <div className="overflow-hidden">
        <Header />
        <main className="relative z-0">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutContainer;
