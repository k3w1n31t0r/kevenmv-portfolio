import React from 'react'

const Span = ({text}: { text: string }) => {
  return (
    <p className='text-gray-700 mb-5 text-base md:text-xl leading-8 font-medium'>
        {text}
    </p>
  )
}

export default Span