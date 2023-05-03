import Link from "next/link";
import { useEffect, useState } from "react";

// https://www.youtube.com/watch?v=dFgzHOX84xQ
// This is the video of Tailwind Tutorial

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

export default function Header({ fields, logo }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <nav className="relative p-6 sticky top-0 bg-white">
      <div className="flex justify-between items-center">
        {/* logo */}
        <Link href={"/"} className="py-2">
          {/* <img src="logo.png" alt="logo" /> */}
          <img src={"http:" + logo[0].fields.logo.fields.file.url} alt="logo" />
        </Link>

        {/* Menu items */}
        <div className="hidden md:flex space-x-12 justify-between">
          {fields.map((field) => (
            <Link
              href={
                field.fields.value.toLowerCase() === "home" ||
                field.fields.value.toLowerCase() === "trang chủ"
                  ? "/"
                  : `/${field.fields.value.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="text-xl hover:text-orange text-grey font-bold"
              key={field.fields.value}
            >
              {field.fields.value}
            </Link>
          ))}

          {/* Locales */}
          <div>
            <Link href={"/"} locale={"en-US"} className="pr-2">
              <span className="sr-only">en-US</span>
              <FlagIcon lang={"en-US"} />
            </Link>

            <Link href={"/vi-VN"} locale={"vi-VN"}>
              <span className="sr-only">en-US</span>
              <FlagIcon lang={"vi-VN"} />
            </Link>
          </div>
        </div>

        {/* Hamburger menu icon*/}
        <button
          id="menu-btn"
          className={`${
            isHamburgerOpen ? "open" : ""
          } block hamburger md:hidden focus:outline-none`}
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Hamburger Menu */}
      {isHamburgerOpen ? (
        <div className="md:hidden">
          <div
            id="menu"
            className="flex absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-3 right-3 drop-shadow-md text-grey"
          >
            <a
              href="#"
              className=" text-xl hover:text-orange text-grey font-bold"
            >
              HOME
            </a>
            <a
              href="#"
              className=" text-xl hover:text-orange text-grey font-bold"
            >
              ABOUT
            </a>
            <a
              href="#"
              className=" text-xl hover:text-orange text-grey font-bold"
            >
              POST
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
