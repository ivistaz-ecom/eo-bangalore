import { globalFootprintData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GlobalFootprint = () => {
  return (
    <>
      <div className="bg-[#4257E1]">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 py-16">
          <h3 className="font-semibold text-3xl md:text-5xl text-white text-center">
            Global Footprint
          </h3>
          <div className="border-2 border-[#FBC835] w-20 mb-3" />
          <div className="flex justify-center">
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-0"
              data-aos="zoom-in"
            >
              {globalFootprintData.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className={`relative border-dashed ${
                      index < globalFootprintData.length - 3
                        ? 'md:border-b-2 border-gray-300'
                        : ''
                    } ${
                      index % 3 !== 2 ? 'md:border-r-2 border-gray-300' : ''
                    } p-4`}
                  >
                    <div className="flex flex-col items-center gap-5 text-white bg-[#232526] md:bg-transparent py-5 px-10 rounded-md">
                      <span className="text-3xl font-semibold">
                        {item.count}
                      </span>
                      <p className="text-xl text-center">{item.title}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[75vh] bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/banner02.png')] bg-cover bg-center"
        data-aos="zoom-in-up"
      ></div>
      <div className="w-full h-[75vh] bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/banner03.png')] bg-cover bg-center flex flex-col gap-10 md:gap-20 justify-center items-center px-4">
        <div
          className="flex flex-col items-center gap-5 md:gap-10"
          data-aos="fade-down"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-500 text-center">
            <span className="text-[#FFD1E6]">Connect </span>
            <span className="font-light">| </span>
            <span className="text-[#3FB8A2]">Belong </span>
            <span className="font-light">| </span>
            <span className="text-[#89BD43]"> Grow</span>
          </h2>
          <h3 className="text-center text-3xl md:text-5xl text-white font-semibold">
            TOGETHER WE <br /> FLOURISH
          </h3>
        </div>
        <div
          className="flex flex-col items-center gap-5 md:gap-10 text-white"
          data-aos="fade-up"
        >
          <p className="text-lg md:text-2xl text-center w-full md:w-4/6">
            If you’re a founder or co-founder, majority shareholder or a partner
            then we’d like to hear from you.
          </p>
          <Link href="/contact-us">
            <button className="bg-[#4257E1] text-lg md:text-xl font-semibold px-4 md:px-6 py-3 md:py-4">
              Reach out to us
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GlobalFootprint
