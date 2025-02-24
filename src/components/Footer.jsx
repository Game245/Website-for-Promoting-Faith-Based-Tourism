import React from 'react'

function Footer() {
  return (
	<footer className='px-4 md:px-6 py-3 bg-slate-600 text-white'>
		&#169; { `${new Date().getFullYear()} -Information Tachnology`}
	</footer>
  )
}

export default Footer