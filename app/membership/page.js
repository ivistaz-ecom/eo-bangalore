'use client'

import Header from '@/components/Header/Header'
import MemberBenefit from '@/components/Membership/MemberBenefit/MemberBenefit'
import MembershipCriteria from '@/components/Membership/MembershipCriteria/MembershipCriteria'
import WhyJoinEO from '@/components/Membership/WhyJoinEO/WhyJoinEO'
import React from 'react'

import AOS from 'aos'
import { useEffect } from 'react'
import ConnectWithTop from '@/components/Membership/ConnectWithTop/ConnectWithTop'
import NextSeo from '@/components/Seo/Seo'

const page = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <NextSeo
        title="EO Bengaluru Membership - Join a Global Network of Entrepreneurs"
        description="Become a member of EO Bengaluru and unlock a world of opportunities. Enjoy exclusive access to events, resources, and a supportive community of entrepreneurs. Learn more about the benefits of membership and how to join EO Bengaluru."
        path=""
        metaImage=""
      />
      <div className="h-[50vh] bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/membershipBanner.png')] bg-cover bg-center text-white flex flex-col">
        <Header />
        <div className="my-auto" data-aos="fade-up">
          <div className="max-w-screen-xl mx-auto p-5 flex flex-col gap-5 items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold">Membership</h1>
          </div>
        </div>
      </div>

      <WhyJoinEO />
      <MembershipCriteria />
      <MemberBenefit />
      <ConnectWithTop />
    </>
  )
}

export default page
