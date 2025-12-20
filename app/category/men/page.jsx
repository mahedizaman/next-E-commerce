import GiftCard from '@/components/GiftCard'
import MenCategory from '@/components/MenCategory'
import MenHero from '@/components/MenHero'
import React from 'react'

const page = () => {
  return (
    <div>
      <MenHero/>
      <GiftCard/>
      <MenCategory/>
    </div>
  )
}

export default page