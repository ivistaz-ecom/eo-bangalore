import { industryServedData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const IndustriesServed = () => {
  return (
    <div>
      <h2 className="text-5xl text-[#232526] font-semibold text-center">
        Industries Served
      </h2>
      <div className="flex justify-center">
        <ul
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 mb-20"
          data-aos="zoom-in"
        >
          {industryServedData.map((item) => {
            return (
              <li key={item.id} className="relative group cursor-pointer">
                <div className="overflow-hidden w-full h-full">
                  <Image
                    src={item.imageUrl}
                    width={400}
                    height={285}
                    alt=""
                    className="transform transition-transform duration-500 group-hover:scale-110 w-[400px] h-[285px]"
                  />
                </div>
                <div className="w-full h-full bg-black/30 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="border-4 border-white w-[380px] h-[260px] flex items-center justify-center">
                    <span className="text-white text-3xl text-center">
                      {item.category}
                    </span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default IndustriesServed
