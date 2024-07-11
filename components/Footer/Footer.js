import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaInstagramSquare } from 'react-icons/fa'

import WhatsApp from './WhatsApp/WhatsApp'

const Footer = () => {
  return (
    <>
      <div className="bg-[#232526]" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10 pt-20 px-4 md:px-0">
          <Image
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/logo.svg"
            width={293}
            height={77}
            alt="EO Logo"
          />
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-lg text-center">
            <Link href="/">
              <li>HOME</li>
            </Link>
            <Link href="/what-is-eo">
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
          <div>
            <Link
              href="https://www.instagram.com/eobangalore?igsh=bTVzYWdoc2Jyd3U="
              target="_blank"
            >
              <div className="text-xl text-white flex gap-2 items-center">
                <p className="">Folow Us On:</p>
                <Image src="/instagram.png" width={40} height={40} alt="" />
              </div>
            </Link>
          </div>
          <hr className="w-full mt-5" />
        </div>
        <p className="text-white text-lg text-center pt-6">
          ENTREPRENEUR’S ORGANISATION Ⓒ 2024 - ALL RIGHTS RESERVED
        </p>
        <Link href="/privacy-policy">
          <p className="text-white text-lg text-center pb-6">PRIVACY POLICY</p>
        </Link>
      </div>
      <WhatsApp />
    </>
  )
}

export default Footer
