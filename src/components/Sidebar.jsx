import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

export default function Sidebar() {
  const { sidebar, setSidebar, filterData } = useGlobalContext();

  return (
    <div
      className={`${
        sidebar ? "w-56 md:w-80" : "w-0"
      } fixed h-full top-0 left-0 bg-white ease-in-out duration-200 overflow-hidden flex `}
    >
      <button
        className={`
             bg-gray-200 p-2 text-xl rounded-md fixed top-6 left-7
             ${sidebar ? "flex" : "hidden"} `}
        onClick={() => setSidebar(!sidebar)}
      >
        <GoThreeBars />
      </button>
      <div className="flex flex-col gap-4 mt-20 px-4 w-full">
        <Link to="/cart" className="text-xl font-bold text-center">
          Cart
        </Link>
        <div className="flex flex-col gap-2 text-lg items-start font-semibold w-full">
          <button
            className="hover:text-gray-400 border border-black rounded-md py-1 px-3 w-full"
            onClick={() => filterData("men's shoes")}
          >
            Men's shoes
          </button>
          <button
            className="hover:text-gray-400 border border-black rounded-md py-1 px-3 w-full"
            onClick={() => filterData("women's shoes")}
          >
            Women's shoes
          </button>
          <button
            className="hover:text-gray-400 border border-black rounded-md py-1 px-3 w-full"
            onClick={() => filterData("all")}
          >
            All shoes
          </button>
        </div>
      </div>
    </div>
  );
}
