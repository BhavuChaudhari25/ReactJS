import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white f rounded-full h-14 w-14 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repudiandae voluptatum suscipit rerum expedita doloribus.</p>
                <div className='flex justify-between'>
                <button className='bg-blue-500 text-white font-semibold px-8 py-2 rounded-full text-lg '>{props.tag}</button>
                <button className='bg-blue-500 text-white font-semibold px-4 py-3 rounded-full text-lg'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    
  )
}

export default RightCardContent
