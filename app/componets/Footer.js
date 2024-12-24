import React from 'react'

const Footer = () => {

  const currentYear= new Date().getFullYear()

  return (
    <div className='sticky bottom-0 bg-white'>
      <footer className='text-xl h-16 m-auto flex justify-center items-center'>
      &copy; {currentYear} CreatorHub. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer
