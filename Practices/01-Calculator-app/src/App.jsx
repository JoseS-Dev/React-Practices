import { useState } from 'react'
import { SectionResult } from './Components/SectionResult';
import { ButtonCalculator } from "./Components/buttonCalculator";
import './Calculator.css'
function App() {
  const [expression, setExpression] = useState('')
  return (
    <main>
      <SectionResult expression={expression} />
      <ButtonCalculator Expression={expression} setExpression={setExpression} />
    </main>
  )
}

export default App
