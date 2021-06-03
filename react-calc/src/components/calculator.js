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

  const updateOperator = (event) => {
    setOper(event.target.value)
  }
  
  const calcTotal = () => {
    let total = 0
    
    switch (oper) {
      case "+":
        total = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        total = num1 - num2;
        break;
      case "*":
        total = num1 * num2;
        break;
      case "/":
        total = num1 / num2;
        break;
      default:
        total = "";
      }

    setResult(total)
    }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div>
        <input type="text" name="numberOne" value={num1} onChange={updateNum1} />
        <select id= "operators" value={oper} onChange={updateOperator}>
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input type="text" name="numberTwo" value={num2} onChange={updateNum2} />
        <input type="button" value="=" onclick={calcTotal}/>
        <input type="text" id="result" value={result} readOnly/>
      </div>
    </div>
  )

}

export default Calculator