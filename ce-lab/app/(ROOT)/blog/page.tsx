
import BlogsCardContainer from '@/app/Components/BlogsCardContainer'
import React from 'react'

const page = () => {
  return (
    <section className='mt-16 w-[80%] mx-auto mb-10'>
      <p className='text-5xl text-blue-500 font-bold text-center pt-5'>Our Blogs</p>
      <p className='text-xl text-center text-gray-600 my-5'>Learn, Innovate, and Build Your Career with Industry-Leading Cloud Computing Programs</p>

      <BlogsCardContainer/>

      
    </section>
  )
}

export default page
