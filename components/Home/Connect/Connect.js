import Image from 'next/image'
import React from 'react'

const Connect = () => {
  return (
    <div className="flex mb-3">
      <div className="w-1/2 bg-[url('/home/connect.png')] h-[684px] bg-cover bg-center flex items-center">
        <div className="ps-32 text-white text-5xl font-semibold">
          <h3>Connect.</h3>
          <h3>Learn.</h3>
          <h3>Grow.</h3>
          <Image src="/home/liveTheLife.png" width={373} height={64} alt="" />
        </div>
      </div>
      <div className="w-1/2 bg-[#4257E1] flex items-center">
        <div className="ps-32 text-white flex flex-col items-start gap-4">
          <h3 className="text-5xl font-semibold w-1/3">
            Join an evergrowing community.
          </h3>
          <p className="text-xl w-1/2">
            If you’re a founder or co-founder, majority shareholder or a partner
            then we’d like to hear from you.
          </p>
          <button className="bg-white text-[#4257E1] px-6 py-3">
            Connect with us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Connect
