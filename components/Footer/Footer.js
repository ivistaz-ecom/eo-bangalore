import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#232526]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 pt-20 px-4 md:px-0">
        <Image src="/home/logo.svg" width={293} height={77} alt="EO Logo" />
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-lg text-center">
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="/">
            <li>ABOUT US</li>
          </Link>
          <Link href="/">
            <li>MEMBERSHIP</li>
          </Link>
          <Link href="/chapter-officers">
            <li>CHAPTER OFFICERS</li>
          </Link>
          <Link href="my-eo">
            <li>MY EO</li>
          </Link>
          <Link href="https://www.rie2025.com/" target="_blank">
            <li>RIE RIEMIX</li>
          </Link>
          <Link href="contact-us">
            <li>CONTACT US</li>
          </Link>
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
