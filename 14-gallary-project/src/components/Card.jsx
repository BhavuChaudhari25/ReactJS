import React from 'react'

const Card = (props) => {
    console.log(props.item.id);
    
    return (
        <div key={props.item.id} className='bg-gray-800 rounded p-2'>
            <img src={props.item.download_url} alt={props.item.author} className='w-full h-48 object-cover rounded' />
            <p className='mt-2 text-sm text-gray-400'>{props.item.author}</p>
        </div>
    )
}

export default Card
