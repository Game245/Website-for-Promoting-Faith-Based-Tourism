import React from 'react'

export default function About() {
  return (
	<div className='container flex flex-col items-center justify-center max-w-4xl h-screen  mx-auto p-6 text-center'>
    <h1 className='text-4xl font-bold mb-4'>About Us</h1>
    <p className='text-gray-600'>เราคือทีมที่รักในการพัฒนาเว็บไซต์และเทคโนโลยีใหม่ ๆ</p>
    <div className='mt-6'>
      <h2 className='text-2xl font-semibold '>Our Mission</h2>
      <p className='text-gray-500'>เราต้องการสร้างประสบการณ์การใช้งานที่ดีที่สุดให้กับทุกคน</p>
    </div>
    <a href="">ติดต่อเรา</a>
  </div>
  )
}
