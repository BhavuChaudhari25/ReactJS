import React, { useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [data, setData] = React.useState([]);

  const [index, setIndex] = React.useState(1);

  const getData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
      setData(response.data);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { 
    getData();
  }, [index]);

  return (
    <div className='bg-black h-screen text-white'>
        <div>
          <div className='grid grid-cols-3 gap-4'>
            {
              data.map((item) => (
                <Card item={item}></Card>
              ))
            }
          </div>
        </div>

        <div className='flex justify-center items-center p-4'>
          <button onClick={ () => {
            console.log('Clicked Prev');
            setIndex((prevIndex) => Math.max(1, prevIndex - 1));
          }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold'>Prev</button>
          <h1 className='text-black px-2'>Page {index+1}</h1>
          <button onClick={ () => {
            console.log('Clicked Next');
            setIndex((prevIndex) => prevIndex + 1);
          }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold ml-2'>Next</button>
        </div>
    </div>
  )
}

export default App
