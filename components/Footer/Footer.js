import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#232526]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 pt-20">
        <Image src="/home/logo.svg" width={293} height={77} alt="" />
        <ul className="flex gap-8 text-white text-lg">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>MEMBERSHIP</li>
          <li>CHAPTER OFFICERS</li>
          <li>MY EO</li>
          <li>RIE RIEMIX</li>
          <li>CONTACT US</li>
        </ul>
        <hr className="w-full mt-5" />
      </div>
      <p className="text-white text-lg text-center p-6">
        ENTREPRENEUR’S ORGANISATION Ⓒ 2024 - ALL RIGHTS RESERVED
      </p>
    </div>
  )
}

export default Footer
