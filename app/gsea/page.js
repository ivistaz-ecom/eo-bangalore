'use client'

import ApplicationProcess from '@/components/GSEA/ApplicationProcess/ApplicationProcess'
import Eligible from '@/components/GSEA/Eligible/Eligible'
import Faq from '@/components/GSEA/Faq/Faq'
import GSEAEvent from '@/components/GSEA/GSEAEvent/GSEAEvent'
import GlobalStudents from '@/components/GSEA/GlobalStudents/GlobalStudents'
import RightFunding from '@/components/GSEA/RightFunding/RightFunding'
import VisionMission from '@/components/GSEA/VisionMission/VisionMission'
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
        title="GSEA - Global Student Entrepreneur Awards | EO Bengaluru"
        description="Learn about the Global Student Entrepreneur Awards (GSEA) hosted by EO Bengaluru. GSEA is a premier competition for student entrepreneurs, providing them with opportunities for mentorship, networking, and business growth. Discover how you can participate and benefit from GSEA."
        path=""
        metaImage=""
      />
      <Header bgColor="#4257E1" />
      <div className="mb-20">
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col justify-center items-center text-white w-full h-full">
          <div className="relative w-full pb-[56.25%] shadow-xl">
            {' '}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/EO%20GSEA%20EVENT%202024%20HIGH%20RES.mp4"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <GlobalStudents />
      <GSEAEvent />
      <VisionMission />
      <Faq />
      <RightFunding />
      <ApplicationProcess />
      <Eligible />
    </div>
  )
}

export default page
