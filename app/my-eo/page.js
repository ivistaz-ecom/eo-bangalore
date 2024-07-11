'use client'

import Header from '@/components/Header/Header'
import MyEOGroups from '@/components/MyEO/MyEOGroups/MyEOGroups'
import WhatIsMyEO from '@/components/MyEO/WhatIsMyEO/WhatIsMyEO'
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
      <WhatIsMyEO />
      <MyEOGroups />
    </div>
  )
}

export default page
