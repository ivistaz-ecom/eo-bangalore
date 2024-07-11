import { whyJoinEOData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhyJoinEO = () => {
  return (
    <div className="mb-10" data-aos="fade-up">
      <div className="flex flex-col max-w-screen-xl mx-auto mt-7 gap-8">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#232526] text-center">
          Why join EO?
        </h3>
        <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-7">
          {whyJoinEOData.map((item) => {
            return (
              <li
                key={item.id}
                className="flex flex-col items-center w-full sm:w-auto p-3"
              >
                <div className="flex flex-col items-center md:items-start">
                  <Image src={item.icon} width={130} height={127} alt="" />
                  <p className="text-[#232526] text-center md:text-start text-xl w-full sm:w-11/12">
                    {item.title}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
        <Link href="/what-is-eo" className="self-center">
          <button className="bg-[#4257E1] px-6 py-3 text-white mt-4">
            Know more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default WhyJoinEO
