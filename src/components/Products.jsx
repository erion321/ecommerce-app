import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/Context";

export default function Cart() {
  const { data } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <div className=" h-[800px] overflow-y-scroll pb-6 px-5">
      <div className="flex flex-wrap justify-center gap-2 md:gap-5">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate(`/${item.name}`)}
              className="w-[170px] sm:w-[220px] lg:w-[260px] rounded-md bg-white flex flex-col items-center gap-2 justify-between pb-3 cursor-pointer"
            >
              <img
                className="h-40 w-full  object-cover rounded-md"
                src={item.img}
                alt=""
              />
              <div className="flex flex-col gap-2 px-2">
                <h2 className="text-center font-medium">{item.name}</h2>
                <h3 className="text-center text-gray-500 font-semibold capitalize">
                  {item.category}
                </h3>
                <span className="text-center font-bold text-red-500">
                  $ {item.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
