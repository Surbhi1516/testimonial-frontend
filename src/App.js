import { useState, useEffect } from 'react';
import './App.css';
import TestimonialCard from './TestimonialCard';
// import { testimonials } from './testimonials'
import axios from 'axios'

function App() {

  const [testimonials, setTestimonials] = useState([]);

  // NOTE- THE DATA STORED IN THE MONGO DB IS NOT OWNED BY ME. THE DATA HAS BEEN TAKEN FROM THIS WEBSITE - https://testimonialapi.toolcarton.com/ and modified accordingly to store in database and create api endpoints. The data is being used only for educational purposes and not for any commercial purpose.

  const fetchData = async () => {
    const { data } = await axios.get('https://mern-testimonial-api.herokuapp.com/api/testimonials')
    console.log(data)
    setTestimonials(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='app pt-2 bg-gray-200'>
        <h2 className='text-3xl my-2 font-semibold  md:text-4xl text-teal-600'>Testimonials</h2>
        <TestimonialCard data={testimonials} />
      </div>
    </>
  );
}

export default App;


