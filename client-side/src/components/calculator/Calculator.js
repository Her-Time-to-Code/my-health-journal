/// TODO: fix this to make it an actual functioning calculator

import React from 'react'

export default function Calculator() {

    const calc = () => {
        let num1 = prompt("enter the first number")
        let num2 = prompt("enter a second number")

        alert(num1 + num2)
    }
  return (
    <div>
    <h3>Calculator</h3>

    </div>
  )
}
