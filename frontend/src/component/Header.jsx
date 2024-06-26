import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">cyberNauts</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center text-slate-500">
          <input
            type="text"
            placeholder="Search Products.."
            className="bg-transparent focus:outline-none w-24 md:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/create-product"}>
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Create Product
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
