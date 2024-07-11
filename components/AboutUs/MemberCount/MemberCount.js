'use client'

import { memberCount } from '@/utils/data'
import React from 'react'
import CountUp from 'react-countup'

const MemberCount = () => {
  return (
    <ul
      className="flex flex-col md:flex-row justify-center gap-3 my-10 md:my-20 p-16"
      data-aos="fade-down"
    >
      {memberCount.map((item) => {
        return (
          <li
            key={item.id}
            className="border flex items-center justify-center border-[#D2D4E5] rounded-xl w-full md:w-[260px] h-[180px]"
          >
            <div className="p-5 text-center space-y-5" data-aos="fade-up">
              <h4 className="text-4xl md:text-6xl font-semibold text-[#4257E1]">
                <CountUp end={item.count} duration={2.5} />
              </h4>
              <p className="text-lg md:text-xl text-[#232526]">{item.title}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default MemberCount
