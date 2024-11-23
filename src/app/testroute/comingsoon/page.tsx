import React from 'react'
import style from './Comingsoonpage.module.css'

const Commingsoonppage = () => {
  return (
    <div className={`w-screen h-screen flex items-center justify-center ${style.ComingSoonImage} backdrop-grayscale`}>
        <div className="w-screen h-screen flex items-center justify-center  bg-gray-600/65 overflow-x-hidden max-sm:items-start">
            <div className={`container w-11/12 h-5/6 rounded-xl bg-gray-800 max-lg:h-fit max-sm:w-11/12 max-sm:my-6 max-sm:h-fit ${style.tubelight_card_animation}`}>
                <div className=" h-5/6 flex max-lg:flex-col max-lg:h-fit relative max-lg:gap-3 ">
                    <img src="https://t4.ftcdn.net/jpg/05/96/62/65/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg" alt="" className='rounded-lg w-full h-full max-lg:w-full max-sm:hidden'/>
                    <img src="https://static.vecteezy.com/system/resources/previews/030/465/537/non_2x/clothes-hang-in-a-modern-boutique-reflecting-contemporary-fashion-at-the-clothing-shop-vertical-mobile-wallpaper-ai-generated-free-photo.jpg" alt="" className='w-full rounded-lg sm:hidden '/>
                        <h1 className={`${style.style_script_regular} text-7xl max-md:text-5xl py-3 text-center w-full absolute top-5 left-0 text-white`}>carinafashion.in</h1>
                </div>
                <div className=' items-center flex h-1/6 text-center justify-center text-5xl max-lg:py-4 max-md:text-4xl max-sm:text-2xl font-extrabold '>
                    <h1 className={`${style.tubelight_text_animation } `}>Comming Soon...</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Commingsoonppage
