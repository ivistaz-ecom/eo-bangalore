import { memberCount } from '@/utils/data'
import React from 'react'

const MemberCount = () => {
  return (
    <ul className="flex justify-center gap-3 my-20">
      {memberCount.map((item) => {
        return (
          <li
            key={item.id}
            className="border flex items-center justify-center border-[#D2D4E5] rounded-xl w-[260px] h-[180px]"
          >
            <div className="p-5 text-center space-y-5">
              <h4 className="text-6xl font-semibold text-[#4257E1]">
                {item.count}
              </h4>
              <p className="text-xl text-[#232526]">{item.title}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default MemberCount
