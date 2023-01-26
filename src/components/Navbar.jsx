import { GoThreeBars } from "react-icons/GO";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { useGlobalContext } from "../context/Context";
import { useRef, useState } from "react";

export default function Navbar() {
  const { sidebar, setSidebar, filterData } = useGlobalContext();
  const [categories, setCategories] = useState(false);
  const [search, setSearch] = useState(false);
  const searchRef = useRef(null);

  return (
    <nav className="flex justify-center items-center py-8">
      <button
        className="bg-white fixed left-7 top-6 p-2 text-xl rounded-md"
        onClick={() => setSidebar(!sidebar)}
      >
        <GoThreeBars />
      </button>

      <div
        className={`flex items-center justify-center ${
          search && "invisible md:visible"
        }`}
      >
        <button
          className="flex items-center gap-1 font-bold active:scale-[0.98] ease-in-out duration-200"
          onClick={() => setCategories(!categories)}
        >
          ALL PRODUCTS
          <IoIosArrowDown />
        </button>
        <div
          className={`absolute top-16 flex-col items-center gap-2 font-semibold bg-white py-2 px-6 rounded-md md:py-3 md:px-10
         ${categories ? "flex" : "hidden"}
        `}
        >
          <span className="absolute top-[-0.5rem] h-0 w-0 border-l-8 border-l-transparent border-r-transparent border-r-8  border-b-8 border-b-white"></span>

          <button
            className="hover:text-gray-400"
            onClick={() => filterData("men's shoes")}
          >
            Men's shoes
          </button>
          <button
            className="hover:text-gray-400"
            onClick={() => filterData("women's shoes")}
          >
            Women's shoes
          </button>
          <button
            className="hover:text-gray-400"
            onClick={() => filterData("all")}
          >
           All shoes
          </button>
        </div>
      </div>

      <div
        className={`absolute top-6 right-7 h-10 bg-white flex 
      space-between items-center rounded-lg overflow-hidden ease-in duration-300
      ${search ? "w-60 md:w-72 lg:w-96" : "w-10"}`}
      >
        <input
          ref={searchRef}
          type="text"
          placeholder="search"
          className="outline-none pl-2 font-semibold"
        />
        <button
          className="  
          absolute p-2 right-0 top-0 h-10 bg-white w-10
          text-2xl font-bold "
          onClick={() => {
            setSearch(!search), (searchRef.current.focus());
          }}
        >
          <BiSearchAlt2 />
        </button>
      </div>
    </nav>
  );
}
