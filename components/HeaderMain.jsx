import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'

const HeaderMain = () => {
  return (
    <div className='flex gap-6 items-center justify-between px-2 md:px-20 my-4'>
        <SearchBar />
        <Logo />
        <div></div>
    </div>
  )
}

export default HeaderMain