import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    // //type1:
    // useEffect(()=>{
    //     // api call garera data lyeune kam garxa
    //     console.log('I am from inside use effect')
    // },[]) 

    //ttype2
    // useEffect(()=>{
    //     // on click on 'count' this function will be called
    //    console.log("useEffect triggered")
    // },[count,count2])


    // type 3
    useEffect(()=>{
            console.log("UseEffect tiggered")
    })
  return (
    <div>
        <div>UseEffect</div>
        <h2>Count :{count}</h2>
        <button onClick={()=>{
                setCount(count+1)}} >+</button>

        <h2>Count2 :{count2}</h2>
        <button  onClick={()=>{
                setCount2(count2+1)}}>+</button>
    </div>
    

  )
}

export default UseEffect