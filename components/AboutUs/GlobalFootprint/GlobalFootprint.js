import { globalFootprintData } from '@/utils/data'
import Image from 'next/image'
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {globalFootprintData.map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className={`relative border-dashed ${
                      index < globalFootprintData.length - 3
                        ? 'border-b-2 border-gray-300'
                        : ''
                    } ${
                      index % 3 !== 2 ? 'border-r-2 border-gray-300' : ''
                    } p-4`}
                  >
                    <div className="flex flex-col items-center gap-5 text-white py-5 px-10">
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
      <div className="w-full h-[75vh] bg-[url('/about/banner02.png')] bg-cover bg-center"></div>
      <div className="w-full h-[75vh] bg-[url('/about/banner03.png')] bg-cover bg-center flex flex-col gap-20 justify-center items-center">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-5xl font-semibold text-gray-500">
            <span className="text-[#FFD1E6]">Connect </span>{' '}
            <span className="font-light">| </span>
            <span className="text-[#3FB8A2]">Belong </span>
            <span className="font-light">| </span>
            <span className="text-[#89BD43]"> Grow</span>
          </h2>
          <h3 className="text-center text-5xl text-white font-semibold">
            TOGETHER WE <br /> FLOURISH
          </h3>
        </div>
        <div className="flex flex-col items-center gap-10 text-white">
          <p className="text-2xl text-center w-4/6">
            If you’re a founder or co-founder, majority shareholder or a partner
            then we’d like to hear from you.
          </p>
          <button className="bg-[#4257E1] text-xl font-semibold px-6 py-4">
            Reach out to us
          </button>
        </div>
      </div>
    </>
  )
}

export default GlobalFootprint
