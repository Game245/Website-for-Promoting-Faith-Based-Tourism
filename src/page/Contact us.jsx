import React from 'react'

export default function Contact_us() {
  return (
	<div className='container h-auto max-w-4xl mx-auto p-6'>
    <h1 className='text-4xl font-bold text-center mb-6'>Contact Us</h1>
    <div className='text-center text-gray-600 mb-6'>
      <p>Email: 1o4iM@example.com</p>
      <p>Phone: 0123456789</p>
      <p>Follow us on <a href="" className='text-blue-600'>Facebook</a></p>
    </div>
    <form className='bg-gray-100 p-6 rounded-lg shadow-lg'>
      <input type="text"  placeholder='Name' className='w-full p-2 mb-4 border rounded-lg'/>
      <input type="email"  placeholder='Email' className='w-full p-2 mb-4 border rounded-lg'/>
      <textarea placeholder='Your message here' className='w-full p-2 mb-4 border rounded-lg h-32'></textarea>
      <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg'>Send</button>
    </form>
    <div className='mt-6'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2283.105359353489!2d104.84344873026555!3d15.243183365748964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31168879a3121907%3A0x44a73394ddbe5299!2sMaster%20of%20Science%20in%20Engineering%20Technology%2C%20UBRU!5e1!3m2!1sth!2sth!4v1740201359586!5m2!1sth!2sth" className='w-full h-96 rounded-lg'></iframe>
    </div>
  </div>
  )
}
