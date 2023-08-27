import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [currentQuote, setCurrentQuote] = useState()



 
  
  const getRandomQuote = async () => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`)
      const result = await response.json()
      setCurrentQuote(result)
      console.log(result)
    } catch (error) {
    console.error('Error fetching API data', error)
  }
}

useEffect(() => {
  getRandomQuote()
}, []);
const printQuote = () => {
  getRandomQuote()
}



  return (
    <>
    <div className='joke-box'>
    <h1>Chuck Norris Joke Generator</h1>
    <img className='Chuck' src="ChuckNorris.jpeg" alt="Chuck Norris" />
   { currentQuote && (
      <>
      <h2 className='joke'>{currentQuote.value}</h2>
      <button onClick={printQuote}>New Joke</button>
      </>
    )}
      </div>
    </>
  )
}

export default App
