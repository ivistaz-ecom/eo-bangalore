import { membershipCriteriaData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const MembershipCriteria = () => {
  return (
    <div className="">
      <div className="flex flex-col max-w-screen-xl py-16 mx-auto gap-8">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#232526] text-center">
          Membership Criteria
        </h3>
        <ul
          className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-7"
          data-aos="fade-down"
        >
          {membershipCriteriaData.map((item) => {
            return (
              <li
                key={item.id}
                className="w-[352px] rounded-lg p-5 bg-white flex flex-col justify-center items-center"
              >
                <p className="text-white text-center font-semibold w-32 h-32 bg-[#4257E1] flex justify-center items-center rounded-full">
                  {item.tag}
                </p>

                <div className="flex flex-col border border-[#4257E1] px-5 pt-16 pb-4 -mt-14 w-[260px] h-[230px]">
                  <ul className="p-2 m-2 list-disc text-[#232526]">
                    {item.desc.map((descs, index) => {
                      return <li key={index}>{descs}</li>
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MembershipCriteria
