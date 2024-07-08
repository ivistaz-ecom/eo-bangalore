import Header from '@/components/Header/Header'
import MyEOGroups from '@/components/MyEO/MyEOGroups/MyEOGroups'
import WhatIsMyEO from '@/components/MyEO/WhatIsMyEO/WhatIsMyEO'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header bgColor="#4257E1" />
      <WhatIsMyEO />
      <MyEOGroups />
    </div>
  )
}

export default page
