import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({ bgColor }) => {
  return (
    <nav
      class={`border-b bg-[${bgColor}] border-slate-300 dark:bg-gray-900 dark:border-gray-700`}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
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
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:items-center md:mt-0">
            <li>
              <Link
                href="/"
                class="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 px-3 text-white md:p-0 md:w-auto"
              >
                ABOUT US{' '}
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      WHAT IS EO
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
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
                class="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                MEMBERSHIP
              </Link>
            </li>
            <li>
              <Link
                href="/chapter-officers"
                class="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                CHAPTER OFFICERS
              </Link>
            </li>
            <li>
              <a
                href="/my-eo"
                class="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                MY EO
              </a>
            </li>
            <li>
              <Link
                href="https://www.rie2025.com/"
                target="_blank"
                class="block py-2 px-3 text-lg text-white md:p-0"
                aria-current="page"
              >
                RIE RIEMIX
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                class="block py-2 px-3 text-lg text-white md:p-0"
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
