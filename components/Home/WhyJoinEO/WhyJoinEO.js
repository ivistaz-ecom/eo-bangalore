import { whyJoinEOData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const WhyJoinEO = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col max-w-screen-xl mx-auto mt-7 gap-8">
        <h3 className="font-semibold text-5xl text-[#232526]">Why join EO?</h3>
        <ul className="flex justify-between items-center gap-7">
          {whyJoinEOData.map((item) => {
            return (
              <li key={item.id}>
                <div className="">
                  <Image src={item.icon} width={130} height={127} alt="" />
                  <p className="text-[#232526] text-xl w-11/12">{item.title}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <button className="bg-[#4257E1] px-6 py-3 self-center text-white mt-4">
          Know more
        </button>
      </div>
    </div>
  )
}

export default WhyJoinEO
