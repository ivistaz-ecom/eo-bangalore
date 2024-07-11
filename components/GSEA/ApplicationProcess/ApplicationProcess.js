import { applicationProcessData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const ApplicationProcess = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 mb-16">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#4257E1] text-center">
          APPLICATION PROCESS
        </h3>
        <div className="border-2 border-[#FBC835] w-20 mb-3" />
        <div className="flex justify-center">
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            data-aos="zoom-in"
          >
            {applicationProcessData.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`relative border-dashed ${
                    index < applicationProcessData.length - 3
                      ? 'border-b-2 border-gray-300'
                      : ''
                  } ${index % 3 !== 2 ? 'border-r-2 border-gray-300' : ''} p-4`}
                >
                  <div className="flex flex-col gap-5 text-[#454545] py-5 px-10">
                    <Image src={item.iconUrl} width={83} height={83} alt="" />
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p className="">{item.desc}</p>
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

export default ApplicationProcess
