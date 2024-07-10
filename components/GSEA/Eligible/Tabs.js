'use client'

import React, { useState } from 'react'

const tabData = [
  {
    title: 'The Entrepreneur',
    content: (
      <>
        <p className="mb-5">
          You must be enrolled for the current academic year in a
          university/college as an undergraduate or graduate* student at the
          time of application. Full-time enrollment is not required; part-time
          enrollment is acceptable.
        </p>
        <p>
          You must be the owner, founder or controlling shareholder of your
          company and principally responsible for its operation. Each company
          can be represented by only one owner/co-founder.
        </p>
      </>
    ),
    image: '/gsea/tabImage01.png',
  },
  {
    title: 'The Business',
    content: (
      <>
        <p className="mb-5">
          Your business must have been in operation for at least six consecutive
          months prior to the application.
        </p>
        <p className="mb-5">
          Your business must have generated US $500 or received US $1000 in
          investments at the time of application.
        </p>
        <p>Businesses at the idea stage are not eligible.</p>
      </>
    ),
    image: '/gsea/tabImage02.png',
  },
  {
    title: 'Other Qualification Notes',
    content: (
      <>
        <p className="mb-5">
          You should not have been one of the top seven finalists from any
          previous year’s GSEA Global Finals Competition.
        </p>
        <p>The age cap for participation is 30 years of age.</p>
      </>
    ),
    image: '/gsea/tabImage03.png',
  },
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-semibold">{tabData[activeTab].title}</h2>
        <div className="mt-4 text-lg h-[275px]">
          {tabData[activeTab].content}
        </div>
        <div className="mt-6">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`block text-left w-4/6 py-4 px-4 mb-2 border ${
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border-blue-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="w-1/2 p-4">
        <img
          src={tabData[activeTab].image}
          alt={tabData[activeTab].title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default Tabs
