import { LogoReactQuery } from "../images/LogoReactQuery";
import { Menu } from ".";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 drop-shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <Menu className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52" />
        </div>
        <h1 className="btn btn-ghost normal-case text-xl">
          <span className="hidden md:inline-flex">
            Caching e UI otimista com{" "}
          </span>
          React Query
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <Menu className="menu-horizontal p-0" />
      </div>

      <div className="navbar-end">
        <a
          href="https://react-query.tanstack.com/"
          target="_blank"
          className="cursor-pointer"
        >
          <LogoReactQuery className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
};
