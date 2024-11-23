import React from 'react'

const CardToListView = () => {
  return (
    <div className='data-container bg-blue-400 p-5 m-3 rounded-lg'>
        <div className="product-card-container m-10 bg-white w-fit rounded-lg" >
            <div className="product-image-container overflow-hidden">
                <img src="https://images.unsplash.com/photo-1698729616358-4fadac492844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D" alt="" width={300} className='rounded-lg hover:scale-125 transition-all duration-300'/>
            </div>
            <div className="detail-container  p-2">
                <h2 className='font-bold'>Strome Watch 3</h2>
                <p className='text-gray-400 text-sm'>Firebolt</p>
                <div className='flex gap-2'><span className='font-bold'>Rs.800</span><span className='text-gray-300 line-through'>Rs.1200</span><span className='text-green-500 font-semibold'>(27% off)</span></div>
            </div>
        </div>
    </div>
  )
}

export default CardToListView
