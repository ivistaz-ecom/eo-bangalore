'use client'

import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

function GroupCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="slider-container md:px-10 lg:px-20 xl:px-32">
      <Slider {...settings}>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image01.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image02.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image03.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image04.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image05.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image06.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image07.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image08.png" width={300} height={210} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/MyEOGroup/image09.png" width={300} height={210} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default GroupCarousel
