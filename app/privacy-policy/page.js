'use client'

import Header from '@/components/Header/Header'
import React from 'react'

import AOS from 'aos'
import { useEffect } from 'react'
import PrivacyPolicy from './privacy'

const page = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <div className="h-[50vh] bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/privacyBanner.webp')] bg-cover bg-center text-white flex flex-col">
        <Header />
        <div className="my-auto" data-aos="fade-up">
          <div className="max-w-screen-xl mx-auto p-5 flex flex-col gap-5 items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Privacy policy
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto my-10">
        <PrivacyPolicy />
      </div>
    </>
  )
}

export default page
