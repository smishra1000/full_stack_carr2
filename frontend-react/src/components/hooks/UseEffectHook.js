import { useState,useEffect } from "react"

function UseEffectHook(){
    const [age,setAge] = useState(20)
    const [counter,setCounter] = useState(0)
    function updateAge(){
        setAge(age+10)
    }
    function increment(){
        setCounter(counter+1)
    }
    // 1 it will call on every render
    useEffect(()=>{
        console.log("use effect first type calling")
    })

    // 2  this will run on very first render

    useEffect(()=>{
        console.log("use effect 2nd type calling")
    },[])

    // 3 this will call whenever dependency array change

    useEffect(()=>{
        console.log("use effect third type calling")
    },[counter,age])

    return(
        <div>
            <h1>Use Effect Hook demo</h1>
            <h3>Age: {age}</h3>
            <h3>Counter {counter}</h3>
            <button onClick={updateAge}>Update Age</button>
            <button onClick={increment}>Increment Counter</button>
        </div>
    )
}

export default UseEffectHook