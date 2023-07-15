import { Input } from "@nextui-org/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const nav__links = [
  {
    path: "comic-list",
    display: "Comic List",
  },
  {
    path: "genres",
    display: "Genres",
  },
  {
    path: "popular",
    display: "Popular",
  },
  {
    path: "contact-us",
    display: "Contact us",
  },
];

const Header = () => {
  return (
    <div className="bg-zinc-900/30 backdrop-blur-sm w-full flex justify-between items-center  sm:px-[8rem] px-6 py-4 text-white sticky top-0 left-0 z-10">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="font-black text-[1.2rem] pr-8">HEROMANHWA</h1>
        </Link>
        <div className="max-[768px]:fixed max-[768px]:top-0 max-[768px]:left-0 max-[768px]:w-full max-[768px]:h-full max-[768px]:bg-[rgb(0,0,0,0.53)] max-[768px]:z-20 max-[768px]:hidden">
          <ul className="flex items-center gap-[2.7rem] mb-0 max-[768px]:absolute max-[768px]:top-0 max-[768px]:right-0 max-[768px]:w-[250px] max-[768px]:h-full max-[768px]:bg-white max-[768px]:z-30 max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center">
            {nav__links.map((item) => (
              <li key={item.id} className="font-medium text-[0.9rem]">
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "font-bold" : ""
                  }
                  to={item.path}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative flex w-full max-w-[24rem]">
        <Input
          size="lg"
          clearable
          contentLeft={
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          }
          contentLeftStyling={false}
          css={{
            w: "100%",
            "@xsMax": {
              mw: "300px",
            },
            '& .nextui-input-wrapper': {
              background: '#1E1D22', // Đổi màu nền sang màu đen
            },
            '& .nextui-input, & .nextui-input-placeholder': {
              color: 'white', // Đổi màu chữ sang màu trắng
            },
            "& .nextui-input-content--left": {
              h: "100%",
              ml: "$4",
              dflex: "center",
            },
          }}
          placeholder="Search for favorite comic..."
        />
      </div>
    </div>
  );
};

export default Header;
