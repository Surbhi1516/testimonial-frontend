import React from 'react'
import { AiFillStar } from "react-icons/ai";


const starArray = [...Array(5).keys()].map(i => i + 1)
console.log(starArray)
const Rating = ({ data }) => {
  // console.log(props.data)
  return (
    <div className='flex'>
      {starArray.map(i => (

        <AiFillStar key={i} color={data >= i ? 'orange' : 'gray'} />
      ))}
    </div>
  )

}

export default Rating