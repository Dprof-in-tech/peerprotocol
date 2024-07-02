"use client";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div>
      <nav className="flex items-center justify-between py-6 h-[15vh] bg-background text-text">
        <img
          src={isDarkMode ? "/images/LogoWhite.svg" : "/images/LogoBlack.svg"}
          width={40}
          height={40}
          alt=""
          className="lg:w-10 xl:w-14 w-6"
        />

        <div className="lg:flex gap-24 hidden items-center :border lg:border-green-600">
          <div className="flex gap-10">
            <div className="flex items-center">
              <p className="cursor-pointer">Discord</p>
              <Image
                src="/images/RightArrow.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>

            <div className="flex items-center">
              <p className="cursor-pointer">Twitter</p>
              <Image
                src="/images/RightArrow.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>
            <div className="flex items-center">
              <p className="cursor-pointer">Blog</p>
              <Image
                src="/images/RightArrow.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <a href="#Team">
              <p className="cursor-pointer">Team</p>
            </a>
            <Link
              href="https://app.gitbook.com/o/02QY6ijdm8nYPzf6caHW/s/MMuGCmhvKWQDxvmAvsYO/"
              target="_blank"
            >
              <div className="flex items-center">
                <p className="cursor-pointer">Documentation</p>
                <Image
                  src="/images/RightArrow.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </div>
            </Link>
            <div className="flex items-center">
              <p className="cursor-pointer">Careers</p>
              <Image
                src="/images/RightArrow.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>
            <div className="flex items-center">
              <p className="cursor-pointer">Reach Out</p>
              <Image
                src="/images/RightArrow.svg"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex items-center gap-6">
          <div className="flex gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`lg:border lg:block lg:border-current lg:px-6 px-2 border border-black py-2 rounded-3xl flex items-center space-x-2 ${
                isDarkMode
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              {isDarkMode ? (
                <div className="xl:w-6 xl:h-6 w-3 h-3">
                  <MoonIcon className="xl:w-6 xl:h-6 h-3 w-3" />
                </div>
              ) : (
                <div className="xl:w-6 xl:h-6 w-3 h-3">
                  <SunIcon className="xl:w-6 xl:h-6 h-3 w-3" />
                </div>
              )}
            </button>
            <div className="relative z-10">
              <button
                onClick={toggleMenu}
                className="block lg:hidden text-gray-700"
              >
                {menuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>

              <div
                className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-700"
                >
                  <XIcon className="h-6 w-6" />
                </button>

                <ul className="p-4 my-16 text-center leading-[4rem] text-2xl">
                  <div className="flex items-center justify-center">
                    <p className="cursor-pointer">Discord</p>
                    <Image
                      src="/images/RightArrow.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="cursor-pointer">Twitter</p>
                    <Image
                      src="/images/RightArrow.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="cursor-pointer">Blog</p>
                    <Image
                      src="/images/RightArrow.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
                  </div>
                  <p className="cursor-pointer">Team</p>
                  <div className="flex items-center justify-center">
                    <p className="cursor-pointer">Documentation</p>
                    <Image
                      src="/images/RightArrow.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="cursor-pointer">Careers</p>
                    <Image
                      src="/images/RightArrow.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="cursor-pointer">Reach out</p>
                    <Image
                      src="/images/RightArrow.svg"
                      width={25}
                      height={25}
                      alt="Picture of the author"
                    />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <Link href="/peerapp" target="_blank">
            <button
              className={`lg:border lg:block lg: border-current px-6 py-2 rounded-3xl hidden ${
                isDarkMode
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              Launch App
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
