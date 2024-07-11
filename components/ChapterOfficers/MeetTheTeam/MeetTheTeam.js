import { myEOGroupsData, myEOTeam } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const MeetTheTeam = () => {
  return (
    <div className="py-10 md:py-24 bg-[#EAEAEA]">
      <h3
        className="font-semibold text-5xl text-[#4257E1] text-center"
        data-aos="fade-up"
      >
        Meet the team
      </h3>
      <p className="text-[#232526] text-lg text-center mt-3" data-aos="fade-up">
        Get to know the people behind EO Bangalore.
      </p>
      <div className="mt-10 md:mt-16 flex justify-center">
        <ul
          className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          data-aos="zoom-in"
        >
          {myEOTeam.map((item) => {
            return (
              <li key={item.id}>
                <div className="bg-white p-2 flex flex-col gap-3">
                  <Image src={item.imageUrl} width={234} height={233} alt="" />
                  <div className="mt-2 mb-4">
                    <h4 className="text-[#4257E1] text-lg font-semibold">
                      {item.name}
                    </h4>
                    <p className="text-[#454545]">{item.designation}</p>
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

export default MeetTheTeam
