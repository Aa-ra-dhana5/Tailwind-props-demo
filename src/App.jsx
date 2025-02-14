// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg''
import Card from './compornants/card'

import './App.css'

function App() {
   
  let myObj = {
    username: "Aaradhana",
    age: 20
  }

  let newArr = [1, 2, 3]
   
  return (
    <>
    <h1 className='bg-green-300 text-black p-0.5 rounded-b-xl'>Tailwind Test</h1>
   <Card username="chaiorreact"/>
   <Card username="aaradhana" btnText="Click me"/>
    </>
  )
}

export default App
