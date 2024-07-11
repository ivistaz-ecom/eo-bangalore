import { globalCommunityData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const GlobalCommunity = () => {
  return (
    <div className="my-20">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10">
        <h1 className="text-5xl font-semibold text-center">
          A global connected <br /> community.
        </h1>
        <div>
          <ul
            className="flex items-center justify-center flex-wrap gap-16"
            data-aos="fade-up"
          >
            {globalCommunityData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="border border-[#4257E1] rounded-full p-3"
                >
                  <div className="flex flex-col items-center justify-center gap-3 p-3 rounded-full shadow-xl w-[280px] h-[280px]">
                    <Image src={item.iconUrl} width={54} height={40} alt="" />
                    <h4 className="text-[#DD0062] text-3xl">{item.title}</h4>
                    <p className="text-[#232526] text-center">{item.desc}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GlobalCommunity
