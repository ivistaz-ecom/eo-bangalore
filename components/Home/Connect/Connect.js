import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Connect = () => {
  useEffect(() => {
    const texts = ['Connect.', 'Learn.', 'Grown.', 'Live the EO Life.']

    const textElement = document.getElementById('text')
    let index = 0

    function fadeInText() {
      textElement.textContent = texts[index]
      textElement.style.opacity = 0

      setTimeout(() => {
        textElement.style.opacity = 1
      }, 100) // Adjust delay for smoother transition

      index++

      // Stop the animation when reaching the last text
      if (index === texts.length) {
        clearInterval(interval)
      }
    }

    // Initial call to start the animation
    fadeInText()

    // Set interval to fade in each text
    const interval = setInterval(fadeInText, 1000) // Adjust time here
  })
  return (
    <div className="flex flex-col md:flex-row mb-3 overflow-hidden">
      <div
        className="w-full md:w-1/2 bg-[url('https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/EOBanaglore/connect.png')] h-[400px] md:h-[684px] bg-cover bg-center flex justify-center items-center"
        data-aos="fade-right"
      >
        <div
          className="text-white text-3xl md:text-7xl font-semibold animate-pulse transition ease-in"
          id="text"
        >
          {/* <h3>Connect.</h3>
          <h3>Learn.</h3>
          <h3>Grow.</h3> */}
        </div>
      </div>
      <div
        className="w-full md:w-1/2 bg-[#4257E1] h-[400px] md:h-[684px] flex items-center"
        data-aos="fade-left"
      >
        <div className="text-white flex flex-col items-center md:items-start gap-5 text-center md:text-start p-3 md:ps-24">
          <h3 className="text-3xl md:text-5xl font-semibold md:w-1/3">
            Join an evergrowing community.
          </h3>
          <p className="text-xl md:w-1/2">
            If you’re a founder or co-founder, majority shareholder or a partner
            then we’d like to hear from you.
          </p>
          <Link href="/contact-us">
            <button className="bg-white text-[#4257E1] px-6 py-3">
              Connect with us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Connect
