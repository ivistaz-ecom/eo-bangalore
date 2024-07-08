import Image from 'next/image'
import React from 'react'

const HaveAQuery = () => {
  return (
    <div className="bg-[#E6E6E6] pt-12 pb-24">
      <div className="max-w-screen-xl mx-auto">
        <h3 className="font-semibold text-5xl text-[#4257E1] mb-8">
          Have A Query?
        </h3>
        <div className="max-w-screen-xl mx-auto flex gap-20">
          <form className="w-2/5">
            <div className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-0 outline-none p-3 w-full text-[#232526]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-0 outline-none p-3 w-full text-[#232526]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border-0 outline-none p-3 w-full text-[#232526]"
                />
              </div>
              <div>
                <textarea
                  cols="30"
                  rows="5"
                  placeholder="Your Message"
                  className="border-0 outline-none p-3 w-full text-[#232526]"
                ></textarea>
              </div>
              <button
                className="bg-[#4257E1] text-white px-6 py-3"
                type="submit"
              >
                SEND A MESSAGE
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-8 w-2/5">
            <div className="bg-white p-3 flex flex-col gap-3 border-b-4 border-[#4257E1]">
              <Image
                src="/contactUs/image02.svg"
                width={43}
                height={43}
                alt=""
              />
              <h3 className="font-semibold text-3xl text-[#232526]">
                Chat with us
              </h3>
              <p className="text-lg text-[#232526]">
                Please fill out our contact form and our support representative
                will get in touch with you shortly.
              </p>
            </div>
            <div className="bg-white p-3 flex flex-col gap-3 border-b-4 border-[#4257E1]">
              <Image
                src="/contactUs/image03.svg"
                width={43}
                height={43}
                alt=""
              />
              <h3 className="font-semibold text-3xl text-[#232526]">
                Chat with us
              </h3>
              <p className="text-lg text-[#232526]">
                Please fill out our contact form and our support representative
                will get in touch with you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HaveAQuery
