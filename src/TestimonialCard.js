import React from 'react'
import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from './Rating';


const TestimonialCard = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      <Slider {...settings}>

        {data.map((item, index) => {
          const { name, designation, avatar, message, rating } = item;
          return (
            <div>

              <div className=' flex flex-col items-center justify-center p-10 pb-5 m-6  md:mx-20 lg:mx-32 bg-white shadow-lg md:px-20 lg:px-28  bg-opacity-50 rounded-md' key={index}>

                <div className=' flex items-center  h-24 w-24 md:h-28 md:w-28 lg:w-32 lg:h-32 rounded-full drop-shadow-xl '>
                  <img className='rounded-full border-4 border-gray-100' src={avatar} alt="avatar img" />
                </div>

                <div className=' flex flex-col items-center justify-center text-center p-2 my-2'>
                  <p className='text-xl md:text-2xl  font-medium text-teal-700'>{name}</p>
                  <p className='py-2 text-gray-500 text-sm lg:text-lg font-sans '>{designation}</p>
                  <div className=' relative p-1 flex items-center justify-center text-center'>
                    <RiSingleQuotesL className='text-2xl text-gray-400 absolute left-0 top-0' /><p className='p-2 pb-1 md:pt-4 italic text-base md:text-lg  font-light text-teal-900 mb-3'>{message}</p><RiSingleQuotesR className='text-2xl text-gray-400 absolute right-0 bottom-3 ' />
                  </div>

                  <Rating data={rating} />

                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default TestimonialCard;

