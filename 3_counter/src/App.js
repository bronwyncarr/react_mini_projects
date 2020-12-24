import React, { useState, useEffect} from 'react'
const randomcolor = require('randomcolor');

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  function increment() {
    setCount(prevCount => prevCount +1)
  }

  function decrement() {
    setCount(prevState => prevState -1)
  }

  // Lets you perform side effects
  // specify in brackets what variable to watch for and rerender only when it changes.
  // empty array means it will only run when the page intitally loads
  useEffect(() => {
    setColor(randomcolor())
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevState => prevState + 1)
    }, 1000)

    // clean up function
    return () => clearInterval(interval)
  }, [])



  return (
    <div class="app">
        <h1 style={{color: color}}>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>    
  );
}

export default App;
