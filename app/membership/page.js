import Header from '@/components/Header/Header'
import MemberBenefit from '@/components/Membership/MemberBenefit/MemberBenefit'
import MembershipCriteria from '@/components/Membership/MembershipCriteria/MembershipCriteria'
import WhyJoinEO from '@/components/Membership/WhyJoinEO/WhyJoinEO'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[50vh] bg-[url('/membership/membershipBanner.png')] bg-cover bg-center text-white flex flex-col">
        <Header />
        <div className="my-auto">
          <div className="max-w-screen-xl mx-auto p-5 flex flex-col gap-5 items-start">
            <h1 className="text-5xl font-semibold">Membership</h1>
          </div>
        </div>
      </div>
      <WhyJoinEO />
      <MembershipCriteria />
      <MemberBenefit />
    </>
  )
}

export default page
