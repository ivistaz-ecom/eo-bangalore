'use client'

import React from 'react'
import Tabs from './Tabs'

const Eligible = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 mb-16">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#4257E1] text-center">
          WHO IS ELIGIBLE TO APPLY FOR GSEA?
        </h3>
        <Tabs />
      </div>
      <div className="flex justify-center mb-16">
        <button
          onClick={scrollToTop}
          className="flex items-center p-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Eligible
