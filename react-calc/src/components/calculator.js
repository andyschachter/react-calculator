import React, { useState } from 'react'

const Calculator = () => {

  const [num1, setNum1] = useState('')

  const [oper, setOper] = useState('+')

  const [num2, setNum2] = useState('')

  const [result, setResult] = useState('')

  const [err, setErr] = useState('')

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
    let error = ''
    
    if(isNaN(num1) || isNaN(num2)) {
      total = ""
      error = "Please provide a valid number for both operands"
    } else {
    
      switch (oper) {
        case "+":
          total = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          total = parseFloat(num1) - parseFloat(num2);
          break;
        case "*":
          total = parseFloat(num1) * parseFloat(num2);
          break;
        case "/":
          total = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          total = "";
        }
    }

    setResult(total)
    setErr(error)
    console.log(total)
    }

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div>
        <input type="text" name="numberOne" value={num1} onChange={updateNum1} />
        <select id= "operators" onChange={updateOperator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="text" name="numberTwo" value={num2} onChange={updateNum2} />
        <input type="button" value="=" onClick={calcTotal}/>
        <input type="text" id="result" value={result} readOnly/>
      </div>
      <div className="error">
        {err}
      </div>
    </div>
  )

}

export default Calculator