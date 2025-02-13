"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const pathUrl = usePathname();

  const handleToggleSubmenu = (index: number) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(index);
    }
  };

  return (
    <header
      className="z-99999 fixed left-0 top-0 w-full py-4 bg-primary shadow dark:bg-black"
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 lg:flex">
        <div className="flex w-full items-center justify-between lg:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/aefeup.svg"
              alt="logo"
              width={119.03}
              height={30}
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block lg:hidden"
            onClick={() => { setOpenSubmenu(null); setNavigationOpen(!navigationOpen) }}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-white delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`fixed left-0 invisible h-0 w-full items-center justify-end lg:static lg:visible lg:flex lg:h-auto lg:w-full ${navigationOpen &&
            "h-screen !visible rounded-md bg-primary p-7.5 dark:bg-blacksection lg:max-h-[400px] lg:h-auto lg:p-0 lg:shadow-none lg:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 text-xl lg:flex-row lg:text-lg items-center lg:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => handleToggleSubmenu(key)}
                        className="flex cursor-pointer items-center mx-auto justify-between gap-3 text-white hover:text-gray-300"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-white group-hover:text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>
                      <ul
                        className={`dropdown ${openSubmenu === key ? "flex" : ""
                          }`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link 
                              href={"/" + (menuItem.path ? menuItem.path + "/" : "") + item.path || "#"}
                              onClick={() => { setOpenSubmenu(null); setNavigationOpen(!navigationOpen) }}
                            >{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      onClick={() => { setOpenSubmenu(null); setNavigationOpen(!navigationOpen) }}
                      href={`${menuItem.path}`}
                      className= "text-white"
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Hidden Theme Toogler
          <div className="mt-7 lg:mt-0">
            <ThemeToggler />
          </div>
           */}
        </div>
      </div>
    </header>
  );
};

export default Header;


