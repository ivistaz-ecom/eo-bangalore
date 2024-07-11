'use client'

import MeetTheTeam from '@/components/ChapterOfficers/MeetTheTeam/MeetTheTeam'
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
      <MeetTheTeam />
    </div>
  )
}

export default page
