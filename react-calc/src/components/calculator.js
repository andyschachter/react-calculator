import React, { useState } from 'react'

const Calculator = () => {

  const [num1, setNum1] = useState('')

  const [oper, setOper] = useState('+')

  const [num2, setNum2] = useState('')

  const [result, setResult] = useState('')

  const updateNum1 = (event) => {
    setNum1(event.target.value)
  }

  const updateOperator = (event) => {
    setOper(event.target.value)
  }

  const updateNum2 = (event) => {
    setNum2(event.target.value)
  }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
    </div>
  )

}

export default Calculator