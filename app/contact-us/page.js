'use client'

import HaveAQuery from '@/components/Contactus/HaveAQuery/HaveAQuery'
import Header from '@/components/Header/Header'
import React from 'react'

import AOS from 'aos'
import { useEffect } from 'react'

const page = () => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div className="h-[80vh] bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/image01.png')] bg-cover bg-center text-white flex flex-col mb-8">
        <Header />
        <div className="my-auto">
          <div className="p-5 text-center">
            <h1
              className="text-5xl font-semibold text-center"
              data-aos="fade-up"
            >
              Let’s get in touch
            </h1>
          </div>
        </div>
      </div>
      <HaveAQuery />
    </>
  )
}

export default page
