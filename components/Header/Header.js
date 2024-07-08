'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = ({ bgColor }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <nav
      className={`border-b bg-[${bgColor}] border-slate-300 dark:bg-gray-900 dark:border-gray-700`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="home/logo.svg"
            height={51}
            width={196}
            alt="EO Bengaluru"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            navbarOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li className="relative">
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-white md:p-0 md:w-auto"
              >
                ABOUT US
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`z-10 ${
                  dropdownOpen ? 'block' : 'hidden'
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      WHAT IS EO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      EO BANGALORE
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                href="/membership"
                className="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                MEMBERSHIP
              </Link>
            </li>
            <li>
              <Link
                href="/chapter-officers"
                className="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                CHAPTER OFFICERS
              </Link>
            </li>
            <li>
              <Link
                href="/my-eo"
                className="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                MY EO
              </Link>
            </li>
            <li>
              <Link
                href="https://www.rie2025.com/"
                target="_blank"
                className="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                RIE RIEMIX
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
