import GiftCard from '@/components/GiftCard'
import MenByTrend from '@/components/MenByTrend'
import MenCategory from '@/components/MenCategory'
import MenHero from '@/components/MenHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <MenHero/>
      <GiftCard/>
      <MenCategory/>
      <MenByTrend/>
    </div>
  )
}

export default page