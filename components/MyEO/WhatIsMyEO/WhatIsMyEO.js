import React from 'react'

const WhatIsMyEO = () => {
  return (
    <div className="mt-10 mb-16">
      <div
        className="max-w-screen-xl mx-auto p-6 md:p-10 flex flex-col items-center gap-10"
        data-aos="fade-up"
      >
        <h3 className="font-semibold text-3xl md:text-5xl text-[#4257E1] text-center">
          What is MyEO?
        </h3>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full md:w-3/4">
          <p className="text-[#232526] w-full md:w-1/2 text-base md:text-lg">
            MyEO is an opportunity for members & spouses to customize their EO
            journey and maximize the value of their membership. Through this
            global resource, members / spouses can create personalized MyEO
          </p>
          <p className="text-[#232526] w-full md:w-1/2 text-base md:text-lg">
            Forums, start or join MyEO Groups,and host or participate in MyEO
            Events geared toward their personal passions, interests and
            projects.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatIsMyEO
