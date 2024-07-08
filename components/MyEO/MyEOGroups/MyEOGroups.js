import { myEOGroupsData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const MyEOGroups = () => {
  return (
    <div className="mb-24">
      <h3 className="font-semibold text-3xl md:text-5xl text-[#4257E1] text-center">
        My EO Groups
      </h3>
      <div className="mt-10 flex justify-center">
        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {myEOGroupsData.map((item) => (
            <li key={item.id} className="flex flex-col">
              <div
                className="flex flex-col h-full"
                style={{ background: item.bgColor }}
              >
                <div className="relative pb-[56.25%]">
                  <Image
                    src={item.imageUrl}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex justify-between w-full p-5 flex-grow text-lg font-semibold">
                  <p className="w-3/4">{item.desc}</p>
                  <Link href={item.link} target="_blank">
                    <div className="flex gap-2 items-center">
                      <span className="p-1 bg-[#25D366] rounded-full text-white md:text-xl">
                        <FaWhatsapp />
                      </span>
                      <p className="text-sm md:text-xl">JOIN NOW</p>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MyEOGroups
