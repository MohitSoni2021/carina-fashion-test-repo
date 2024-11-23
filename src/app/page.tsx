import CardToListView from '@/components/card-list-layout'
import NavbarComponent from '@/components/navbar'
import React from 'react'

const MainHomePage = () => {
  return (
    <div className='h-[5000px]'>
      <NavbarComponent />
      <h1>This is the defalt home page</h1>
      <CardToListView />
    </div>
  )
}

export default MainHomePage
