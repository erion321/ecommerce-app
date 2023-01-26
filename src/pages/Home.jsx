import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import { useGlobalContext } from "../context/Context";
import { BiShoppingBag } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex flex-col overflow-hidden h-screen">
        <Navbar />
        <Sidebar />
        <Products />
        <section className="bg-white sticky bottom-0 left-0 w-full h-24 flex justify-center">
          <button
            className="absolute text-4xl top-[-1rem] bg-white shadow-lg hover:drop-shadow-lg hover:top-[-1.2rem] ease-in-out duration-200 shadow-gray-400 p-1 rounded-xl"
            onClick={() => navigate("/cart")}
          >
            <BiShoppingBag />
          </button>
        </section>
      </div>
    </div>
  );
}
