import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Nav from './components/Nav'
import Frame from './components/Frame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Frame/>
      {/* Hello world */}
    </>
  )
}

export default App
