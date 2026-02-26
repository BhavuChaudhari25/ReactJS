import React from 'react'

const App = () => {


  function btnClicked(){
    console.log('Hello');
    
  }

  return (
    <div onClick={btnClicked}>
      <button>Click</button>
    </div>
  )
}

export default App
