import { memberBenefitData } from '@/utils/data'
import React from 'react'

const MemberBenefit = () => {
  return (
    <div className="bg-[#EBEBEB] py-16">
      <div className="flex flex-col max-w-screen-xl mx-auto gap-8">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#232526] text-center">
          Member’s Benefit
        </h3>
        <p className="text-[#232526] text-center">
          Solutions to the Challenges faced by the Business Owners
        </p>
        <ul className="flex flex-col items-center gap-7">
          {memberBenefitData.map((item) => {
            return (
              <li
                key={item.id}
                className="w-10/12 border border-[#C5CBF0] p-5 bg-white flex flex-col justify-center gap-3"
                data-aos={item.data}
              >
                <h4
                  className="text-2xl font-semibold"
                  style={{ color: item.textColor }}
                >
                  {item.title}
                </h4>
                <p className="text-[#232526]">{item.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MemberBenefit
