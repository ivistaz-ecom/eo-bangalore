import React from 'react'

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div className="w-full md:w-1/2 bg-cover bg-center bg-[url('/home/getInTouch.png')]">
        <div className="h-96 md:h-[684px]"></div>
      </div>
      <div className="w-full md:w-1/2 bg-[#232526] flex items-center">
        <div className="p-6 md:ps-32 md:text-white flex flex-col items-start gap-4">
          <h3 className="text-3xl md:text-5xl text-white font-semibold">
            Get in touch
          </h3>
          <p className="text-base md:text-xl text-white w-full md:w-4/6">
            Burning question or request? We endeavor to answer all inquiries
            within 24 hours on business days.
          </p>

          <form className="w-full md:w-3/4">
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                />
              </div>
              <div>
                <textarea
                  cols="30"
                  rows="4"
                  placeholder="Your Message"
                  className="border-0 outline-none p-3 w-full text-[#232526] bg-white"
                ></textarea>
              </div>
              <button
                className="bg-[#4257E1] text-white px-6 py-3 w-full md:w-auto"
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
