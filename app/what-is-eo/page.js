'use client'

import CoreValues from '@/components/AboutUs/CoreValues/CoreValues'
import GlobalCommunity from '@/components/AboutUs/GlobalCommunity/GlobalCommunity'
import GlobalFootprint from '@/components/AboutUs/GlobalFootprint/GlobalFootprint'
import Since1987 from '@/components/AboutUs/Since1987/Since1987'
import Header from '@/components/Header/Header'
import React from 'react'
import AOS from 'aos'
import { useEffect } from 'react'
import NextSeo from '@/components/Seo/Seo'

const page = () => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <div>
      <NextSeo
        title="What is EO - Entrepreneurs' Organization Bengaluru"
        description="Discover what EO (Entrepreneurs' Organization) is and how it supports entrepreneurs worldwide. Learn about EO Bengaluru's mission, values, and the benefits of joining a global network dedicated to entrepreneurial growth and success."
        path=""
        metaImage=""
      />
      <Header bgColor="#4257E1" />
      <div className="bg-[#4257E1]">
        <div
          className="max-w-screen-xl mx-auto px-10 py-24 text-center flex flex-col items-center text-white"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-semibold mb-7">ABOUT EO</h1>
          <div className="border-2 border-[#FBC835] w-20 mb-3" />
          <p className="text-2xl w-3/4">
            As the world’s only peer-to-peer network exclusively for
            entrepreneurs, EO helps transform the lives of those who transform
            the world.
          </p>
        </div>
      </div>
      <GlobalCommunity />
      <Since1987 />
      <CoreValues />
      <GlobalFootprint />
    </div>
  )
}

export default page
