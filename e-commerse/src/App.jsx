import { useState } from 'react'
import Data from './Components/Table/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Data />
    </>
  )
}

export default App
