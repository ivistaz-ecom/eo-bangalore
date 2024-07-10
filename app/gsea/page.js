import ApplicationProcess from '@/components/GSEA/ApplicationProcess/ApplicationProcess'
import Eligible from '@/components/GSEA/Eligible/Eligible'
import Faq from '@/components/GSEA/Faq/Faq'
import GSEAEvent from '@/components/GSEA/GSEAEvent/GSEAEvent'
import GlobalStudents from '@/components/GSEA/GlobalStudents/GlobalStudents'
import RightFunding from '@/components/GSEA/RightFunding/RightFunding'
import VisionMission from '@/components/GSEA/VisionMission/VisionMission'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header bgColor="#4257E1" />
      <div className="bg-[#4257E1] h-[60vh] mb-20">
        <div className="max-w-screen-xl mx-auto py-24 text-center flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-semibold">Video</h1>
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
