'use client'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Connect from '@/components/Home/Connect/Connect'
import GetInTouch from '@/components/Home/GetInTouch/GetInTouch'
import MyEOGroups from '@/components/Home/MyEOGroups/MyEOGroups'
import Welcome from '@/components/Home/Welcome/Welcome'
import WhyJoinEO from '@/components/Home/WhyJoinEO/WhyJoinEO'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div className="h-[100vh] bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/banner01.png')] bg-cover bg-center text-white flex flex-col mb-3">
        <Header />
        <div className="my-auto" data-aos="fade-up">
          <div className="max-w-screen-xl mx-auto p-5 flex flex-col gap-5 items-center text-center md:text-start md:items-start">
            <h4 className="w-full md:w-1/2 text-2xl md:text-xl">
              Exclusive nexus of accomplished entrepreneurs
            </h4>
            <h1 className="text-3xl md:text-7xl font-semibold">
              We Are EO <br /> Bengaluru
            </h1>
            <Link href="/eo-bangalore">
              <button className="bg-[#4257E1] px-4 py-2 md:px-6 md:py-3">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Welcome />
      <WhyJoinEO />
      <Connect />
      <MyEOGroups />
      <GetInTouch />
    </>
  )
}
