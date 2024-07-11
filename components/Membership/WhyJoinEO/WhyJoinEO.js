import { memberWhyJoinEOData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const WhyJoinEO = () => {
  return (
    <div className="bg-[#4257E1]">
      <div className="flex flex-col max-w-screen-xl py-16 mx-auto gap-8">
        <h3 className="font-semibold text-3xl md:text-5xl text-white text-center">
          Why join EO?
        </h3>
        <ul
          className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-7"
          data-aos="fade-up"
        >
          {memberWhyJoinEOData.map((item) => {
            return (
              <li key={item.id} className="w-[352px] rounded-lg p-5 bg-white">
                <div className="flex items-center">
                  <Image
                    src={item.icon}
                    width={130}
                    height={127}
                    alt=""
                    className="h-[100px] w-24"
                  />
                  <p className="text-[#232526] text-center md:text-start text-xl w-full sm:w-11/12">
                    {item.title}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default WhyJoinEO
