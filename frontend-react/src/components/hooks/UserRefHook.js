import { useEffect, useRef, useState } from "react"
function UseRefHook(){
     //document.getElementById("firstname").value
    const [name,setName] = useState("")
    const inputRef = useRef("");
    console.log(inputRef)
    useEffect(()=>{
            inputRef.current.focus()
    },[])

    const saveName = ()=>{
        // console.log(document.getElementById("firstname").value)
        console.log(inputRef.current.value)
    }


    return(
        <div>
            <h1>Use ref hook demo</h1>
            <input type="text" ref={inputRef} id="firstname"/>
            <button onClick={saveName}>submit</button>
            {name}
        </div>
    )
}

export default UseRefHook