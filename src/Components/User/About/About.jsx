import React from 'react'

function About() {
  return (
    <>
     <div className='p-5 sm:p-24'>
      <h1 className='text-center text-4xl font-semibold text-blue-700'>Contact Us</h1>
      <div className='sm:w-1/2 m-auto'>

      <img src="https://img.freepik.com/free-vector/organic-flat-customer-support_23-2148881015.jpg" alt=""/>
      </div>
      <div className='sm:flex gap-10 text-center justify-center'>
        <div>
            <h2 className='text-xl text-blue-600 font-semibold font-mono'>contact</h2>
            <h2 className='font-normal text-blue-700'>explorease@customersupport.co.in</h2>
            <h2 className='font-normal text-blue-700'>7899877899</h2>
        </div>
        <div>
            <h2 className='text-xl text-blue-600 font-semibold font-mono mt-4 sm:mt-0'>Based In</h2>
            <h2 className='font-normal text-blue-700'>Kochi</h2>
            <h2 className='font-normal text-blue-700'>Kerala</h2>
        </div>
        <div className='flex justify-center gap-3 items-center mt-4 sm:mt-0'>
  <a href="https://www.facebook.com">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="Facebook" className='w-6 h-6 sm:w-8 sm:h-8' />
  </a>
  <a href="https://www.instagram.com">
    <img src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-uc6feurl.png" alt="Instagram" className='w-6 h-6 sm:w-8 sm:h-8'/>
  </a>
  <a href="https://twitter.com">
    <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="Twitter" className='w-6 h-6 sm:w-8 sm:h-8' />
  </a>
</div>

      </div>
    </div>
    </>
  )
}

export default About