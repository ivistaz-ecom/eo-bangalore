'use client'

import { faqData } from '@/utils/data'
import React, { useState } from 'react'
import AccordionMenu from '../AccordionMenu/AccordionMenu'

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id)
  }
  return (
    <div className="bg-[#4257E1]">
      <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-8 flex flex-col items-center">
        <h3 className="text-3xl md:text-5xl font-semibold text-white text-center">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className="w-full md:w-10/12 p-2 rounded-xl mt-10">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="space-y-2"
            data-aos="zoom-in"
          >
            {faqData.map((item) => (
              <AccordionMenu
                key={item.id}
                id={item.id}
                title={item.title}
                content1={item.content1}
                content2={item.content2}
                content3={item.content3}
                content4={item.content4}
                content5={item.content5}
                content6={item.content6}
                isExpanded={expandedItem === item.id}
                toggleExpand={toggleExpand}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
