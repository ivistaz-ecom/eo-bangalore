import HaveAQuery from '@/components/Contactus/HaveAQuery/HaveAQuery'
import Header from '@/components/Header/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <div className="h-[80vh] bg-[url('/contactUs/image01.png')] bg-cover bg-center text-white flex flex-col mb-8">
        <Header />
        <div className="my-auto">
          <div className="p-5 text-center">
            <h1 className="text-5xl font-semibold text-center">
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
