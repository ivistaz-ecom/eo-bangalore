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
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col items-center">
        <h3 className="text-5xl font-semibold text-white">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <div className="w-10/12 p-2 rounded-xl mt-10">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="space-y-2"
          >
            {faqData.map((item) => (
              <AccordionMenu
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
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
