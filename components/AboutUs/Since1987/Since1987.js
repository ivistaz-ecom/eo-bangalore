import React from 'react'

const Since1987 = () => {
  return (
    <div className="flex flex-col md:flex-row mb-3">
      <div
        className="w-full md:w-1/2 bg-cover bg-center bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/since1987.png')]"
        data-aos="fade-right"
      >
        <div className="h-96 md:h-[684px]"></div>
      </div>
      <div
        className="w-full md:w-1/2 bg-[#232526] flex items-center"
        data-aos="fade-left"
      >
        <div className="p-6 md:ps-32 md:text-white flex flex-col items-start gap-4">
          <h3 className="text-3xl md:text-5xl text-white font-semibold">
            Since 1987…
          </h3>
          <p className="text-base md:text-xl text-white w-full md:w-4/5">
            Entrepreneurs’ Organization is a high-quality support network of
            16,500+ diverse business leaders from more than 60 countries. We
            help entrepreneurs achieve their full potential through the power of
            life-enhancing connections, shared experiences and collaborative
            learning.
          </p>
          <p className="text-base md:text-xl text-white w-full md:w-4/5">
            Entrepreneurs’ Organization is a high-quality support network of
            16,500+ diverse business leaders from more than 60 countries. We
            help entrepreneurs achieve their full potential through the power of
            life-enhancing connections, shared experiences and collaborative
            learning.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Since1987
