import { gseaEventData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const GSEAEvent = () => {
  return (
    <div className="mb-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-7">
        <h3 className="text-[#4257E1] text-2xl font-semibold">
          GSEA 2023-2024
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2">
          {gseaEventData.map((item) => {
            return (
              <li key={item.id} className="mx-2 my-5">
                <Image src={item.imageUrl} width={536} height={320} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default GSEAEvent
