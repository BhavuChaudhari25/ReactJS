import React from 'react'

const App = () => {

  const user = { 
    name: 'Bhavesh',
    age: 30, 
    city: 'Ahmedabad'
  }
  localStorage.setItem('user', JSON.stringify(user))
  return (
    <div>
      App
      {JSON.parse(localStorage.getItem('user')).name}
    </div>
  )
}

export default App
