import React from 'react'
import GroupCarousel from '../Carousel/GroupCarousel'

const MyEOGroups = () => {
  return (
    <div className="bg-[url('/home/myEOGroup.png')] bg-cover bg-center h-screen">
      <div className="max-w-screen-xl mx-auto flex flex-col h-full">
        <div className="text-white flex flex-col items-center gap-5 pt-24 p-3">
          <h3 className="font-semibold text-3xl md:text-5xl">My EO Groups</h3>
          <p className="text-xl md:w-1/2 text-center">
            If you’re a founder or co-founder, majority shareholder or a partner
            then we’d like to hear from you.
          </p>
        </div>
        <div className="mt-auto bg-white/45 py-8">
          <GroupCarousel />
        </div>
      </div>
    </div>
  )
}

export default MyEOGroups
