'use client'

import Header from '@/components/Header/Header'
import MyEOGroups from '@/components/MyEO/MyEOGroups/MyEOGroups'
import WhatIsMyEO from '@/components/MyEO/WhatIsMyEO/WhatIsMyEO'
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
        title="My EO - Personalized Experiences for EO Bengaluru Members"
        description="Explore My EO, a unique platform offering personalized experiences and initiatives for EO Bengaluru members. From niche interest groups to customized events, My EO helps you connect with peers and enhance your entrepreneurial journey. Discover the benefits of My EO today."
        path=""
        metaImage=""
      />
      <Header bgColor="#4257E1" />
      <WhatIsMyEO />
      <MyEOGroups />
    </div>
  )
}

export default page
