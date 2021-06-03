import React, { useState } from 'react'

const Calculator = () => {

  const [num1, setNum1] = useState('')

  const [oper, setOper] = useState('+')

  const [num2, setNum2] = useState('')

  const [result, setResult] = useState('')

  const updateNum1 = (event) => {
    setNum1(event.target.value)
  }

  const updateNum2 = (event) => {
    setNum2(event.target.value)
  }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div>
        <input type="number" name="numberOne" onChange={updateNum1} />
        <select id= "operators">
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input type="number" name="numberTwo" onChange={updateNum2} />
        <input type="button" value="=" onclick=""/>
        <input type="number" id="result" onChange={setResult}/>
      </div>
    </div>
  )

}

export default Calculator