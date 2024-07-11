'use client'

import HaveAQuery from '@/components/Contactus/HaveAQuery/HaveAQuery'
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
    <>
      <NextSeo
        title="Contact EO Bengaluru - Get in Touch with Us"
        description="Have questions or want to learn more about EO Bengaluru? Contact us today. Our team is here to help you with any inquiries and provide information about our programs, events, and membership. Reach out to EO Bengaluru now."
        path=""
        metaImage=""
      />
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
