import React from 'react'
import Tabs from './Tabs'

const Eligible = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-8 mb-16">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#4257E1] text-center">
          WHO IS ELIGIBLE TO APPLY FOR GSEA?
        </h3>
        <Tabs />
      </div>
    </div>
  )
}

export default Eligible
