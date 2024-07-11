'use client'

import IndustriesServed from '@/components/AboutUs/IndustriesServed/IndustriesServed'
import MemberCount from '@/components/AboutUs/MemberCount/MemberCount'
import Header from '@/components/Header/Header'
import React from 'react'

import AOS from 'aos'
import { useEffect } from 'react'

const page = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div>
      <Header bgColor="#4257E1" />
      <div className="bg-[#4257E1]">
        <div
          className="max-w-screen-xl mx-auto px-5 md:px-10 py-10 md:py-20 text-center flex flex-col items-center text-white"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-5 md:mb-7">
            Everything About EO Bangalore
          </h1>
          <div className="border-2 border-[#FBC835] w-16 md:w-20 mb-3" />
          <p className="text-lg md:text-2xl w-full md:w-3/4">
            Founded in 2001, our Bangalore chapter has grown to include over 130
            members from diverse fields such as IT, Pharma, Manufacturing, and
            Real Estate. Our members bring a wealth of experience and expertise,
            contributing to a vibrant community. Governed by a dedicated Board,
            the chapter prides itself on fostering both professional and
            personal growth.
          </p>
        </div>
      </div>
      <MemberCount />
      <IndustriesServed />
    </div>
  )
}

export default page
