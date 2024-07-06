import Image from 'next/image'
import React from 'react'

const GetInTouch = () => {
  return (
    <div className="flex mb-3">
      <div className="w-1/2 bg-[url('/home/getInTouch.png')] h-[684px] bg-cover bg-center flex items-center"></div>
      <div className="w-1/2 bg-[#232526] flex items-center">
        <div className="ps-32 text-white flex flex-col items-start gap-4">
          <h3 className="text-5xl font-semibold">Get in touch</h3>
          <p className="text-xl w-4/6">
            Burning question or request? We endeavor to answer all inquiries
            within 24 hours on business days.
          </p>

          <form className="w-1/2">
            <div className="flex flex-col gap-4">
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
                  rows="4"
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
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
