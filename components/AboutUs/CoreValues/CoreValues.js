import { coreValuesData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const CoreValues = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col max-w-screen-xl items-center mx-auto mt-7 gap-8">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#232526] text-center">
          Core Values
        </h3>
        <div className="border-2 border-[#FBC835] w-20 mb-3" />
        <ul className="flex justify-center gap-3">
          {coreValuesData.map((item) => {
            return (
              <li key={item.id} className="flex items-center justify-center">
                <div className="p-5 text-center space-y-5 flex flex-col items-center">
                  <Image
                    src={item.iconUrl}
                    width={120}
                    height={120}
                    className="w-[120px] h-[120px]"
                    alt=""
                  />
                  <p className="text-xl text-[#454545] font-semibold">
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

export default CoreValues
