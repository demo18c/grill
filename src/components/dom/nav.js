import React from 'react'
import Go from '@/components/dom/go'
import Link from 'next/link'

function nav() {
  return (
    <nav className='flex justify-between'>
      <p className='text-2xl font-bold '>IVAS</p>
      {/* <div className='flex'> */}
      {/* <a className='bg-blue-500'>Next</a> */}
      <Link href='/sphere' as={`/sphere`}>
        <button className='absolute z-20 p-2 m-2 text-black focus:outline-none focus:ring'>
          Previous page
        </button>
      </Link>
      {/* </div> */}
    </nav>
  )
}

export default nav
