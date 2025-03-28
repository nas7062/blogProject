import { Outlet } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import SideBar from "../components/Sidebar";

function Layout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex-col ">
        <CategorySection />
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default Layout;
