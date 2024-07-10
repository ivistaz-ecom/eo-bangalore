import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HaveAQuery = () => {
  return (
    <div className="bg-[#E6E6E6] pt-12 pb-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-0">
        <h3 className="font-semibold text-3xl md:text-5xl text-[#4257E1] mb-8 text-center md:text-left">
          Have A Query?
        </h3>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <form className="w-full md:w-2/5">
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

          <div className="flex flex-col gap-8 w-full md:w-2/5">
            <div className="bg-white p-3 flex flex-col gap-3 border-b-4 border-[#4257E1]">
              <Image
                src="/contactUs/image02.svg"
                width={43}
                height={43}
                alt=""
              />
              <h3 className="font-semibold text-2xl md:text-3xl text-[#232526]">
                Chat with us
              </h3>
              <p className="text-base md:text-lg text-[#232526]">
                Please fill out our contact form and our support representative
                will get in touch with you shortly.
              </p>
            </div>
            <Link
              href="https://maps.google.com/?q=12.971849,77.613235"
              target="_blank"
              className=""
            >
              <div className="bg-white p-3 flex flex-col gap-3 border-b-4 group border-[#4257E1] hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src="/contactUs/image03.svg"
                    width={43}
                    height={43}
                    alt="Location Icon"
                    className="transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#232526]">
                  Location
                </h3>
                <p className="text-base md:text-lg text-[#232526]">
                  ‘Casa Fina’, No 5, Primrose Road, <br />
                  Bangalore -560025, Karnataka
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HaveAQuery
