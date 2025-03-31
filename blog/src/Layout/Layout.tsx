import { Outlet } from "react-router-dom";
import CategorySection from "../components/CategorySection";
import SideBar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
interface CategoryPostCount {
  category: string;
  postCount: number;
}

function Layout() {
  const [categories, setCategories] = useState<CategoryPostCount[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getCategoryAll")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex">
      <SideBar categories={categories}/>
      <div className="flex-1 flex-col ">
        <CategorySection  />
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default Layout;
