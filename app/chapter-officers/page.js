'use client'

import MeetTheTeam from '@/components/ChapterOfficers/MeetTheTeam/MeetTheTeam'
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
        title="EO Bengaluru Chapter Officers - Meet Our Leadership Team"
        description="Meet the Chapter Officers of EO Bengaluru. Our dedicated leadership team is committed to supporting and guiding the entrepreneurial community in Bengaluru. Learn more about our officers and their roles in driving the success of EO Bengaluru."
        path=""
        metaImage=""
      />
      <Header bgColor="#4257E1" />
      <MeetTheTeam />
    </div>
  )
}

export default page
