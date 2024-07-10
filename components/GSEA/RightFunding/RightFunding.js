import React from 'react'

const RightFunding = () => {
  return (
    <>
      <div className="mt-14 mb-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h3 className="text-[#4257E1] text-3xl md:text-5xl text-center font-semibold">
            HOW DOES ASSOCIATING WITH <br className="hidden md:inline" /> GSEA
            BENEFIT YOU?
          </h3>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mb-16">
        <div className="w-full md:w-1/2 bg-cover bg-center bg-[url('/gsea/banner01.png')]">
          <div className="h-96 md:h-[400px]"></div>
        </div>
        <div className="w-full md:w-1/2 bg-[#232526] h-[400px] flex items-center">
          <div className="p-6 md:ps-32 md:text-white flex flex-col items-start gap-4">
            <h3 className="text-3xl md:text-5xl text-white font-semibold">
              RIGHT FUNDING
            </h3>
            <p className="text-base md:text-xl text-white w-full md:w-4/5">
              GSEA provides you the opportunity to showcase your business to one
              of the largest community of entrepreneurs and prospective
              investors in the world.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightFunding
