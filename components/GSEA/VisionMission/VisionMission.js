import { visionMissionData } from '@/utils/data'
import React from 'react'

const VisionMission = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col py-5 mx-auto gap-8">
        <ul className="flex flex-row justify-center items-center gap-2">
          {visionMissionData.map((item) => {
            return (
              <li
                key={item.id}
                className="rounded-lg p-5 bg-white flex flex-col justify-center items-center"
              >
                <div className="border border-[#C5CBF0] rounded-3xl p-1 w-[175px] h-[50px] z-50">
                  <p
                    className="text-white text-center font-semibold w-full h-full flex justify-center items-center rounded-3xl"
                    style={{ backgroundColor: item.tagColor }}
                  >
                    {item.tag}
                  </p>
                </div>

                <div
                  className="flex flex-col border px-5 pt-12 pb-4 -mt-6 w-[536px] h-[220px] rounded-xl"
                  style={{ borderColor: item.borderColor }}
                >
                  <p className="text-lg text-[#454545] text-center">
                    {item.desc}
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

export default VisionMission
