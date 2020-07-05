import React, { useState, useEffect } from 'react'
import { getAmadeus } from './lib/amadeus'
import './App.css'

function App () {

  const [test,setTest] = useState([]);
  useEffect(() => { 
    getAmadeus().then(answer => {
      setTest(answer.data)
    })
  },[])

  return (
    <div className="App">
    {test.map((item) =>{
      return item.id
    })}
    </div>
  )
}

export default App
