import { useState } from "react"
import Button from "./Button"

const About = () => {
  // var count=0
  const [number,setNumber] = useState(0)
  // const firstItem = state[0]
  // const secondItem = state[1]
  console.log(number,setNumber)

  const countUP = ()=>{
    setNumber(number + 1)
    }
  
  return (
    // <div>
    //   <h1>Hello world</h1>
    // </div>
    <div>
      <h1>{number}</h1>
      <button onClick={countUP}>+</button>
      </div>
  )
}


export default About