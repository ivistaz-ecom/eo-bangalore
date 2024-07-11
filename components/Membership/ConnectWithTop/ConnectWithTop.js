import Link from 'next/link'
import React from 'react'

const ConnectWithTop = () => {
  return (
    <div className="relative">
      <div className="w-full h-[75vh] bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/connectUs.jpeg')] bg-cover bg-center flex flex-col gap-10 md:gap-20 justify-center items-center px-4">
        <div
          className="flex flex-col items-center gap-5 md:gap-10 w-1/2 z-50"
          data-aos="fade-down"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white text-center">
            Connect with top Entrepreneurs and Grow your Business
          </h2>
          <h3 className="text-center text-xl md:text-3xl text-white font-semibold">
            You're only a few steps away from discovering the power of EO.
          </h3>
          <Link href="/contact-us">
            <button className="bg-[#4257E1] text-white text-xl px-4 py-2 md:px-6 md:py-3">
              Connect With Us
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-black/45 absolute inset-0"></div>
    </div>
  )
}

export default ConnectWithTop
