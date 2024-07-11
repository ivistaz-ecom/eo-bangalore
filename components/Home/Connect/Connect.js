import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Connect = () => {
  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div className="w-full md:w-1/2 bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/connect.png')] h-[400px] md:h-[684px] bg-cover bg-center flex justify-center items-center">
        <div className="text-white text-3xl md:text-5xl font-semibold flex flex-col items-center md:items-start">
          <h3>Connect.</h3>
          <h3>Learn.</h3>
          <h3>Grow.</h3>
          <Image
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/liveTheLife.png"
            width={373}
            height={64}
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-[#4257E1] h-[400px] md:h-[684px] flex items-center">
        <div className="text-white flex flex-col items-center md:items-start gap-5 text-center md:text-start p-3 md:ps-24">
          <h3 className="text-3xl md:text-5xl font-semibold md:w-1/3">
            Join an evergrowing community.
          </h3>
          <p className="text-xl md:w-1/2">
            If you’re a founder or co-founder, majority shareholder or a partner
            then we’d like to hear from you.
          </p>
          <Link href="/contact-us">
            <button className="bg-white text-[#4257E1] px-6 py-3">
              Connect with us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Connect
