import requests from "../requests";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter()
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={()=>router.push(`/?genre=${key}`)}
            key={key}
            className="cursor-pointer hover:transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="w-10 h-10 absolute top-0 right-0 bg-gradient-to-l from-[#06202a]"></div>
      <div className="w-10 h-10 absolute top-0 left-0 bg-gradient-to-r from-[#06202a]"></div>
    </nav>
  );
}

export default Navbar