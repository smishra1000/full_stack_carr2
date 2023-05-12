import {useRef} from "react"

function UseRefHook(){

    const inputRef = useRef("")
    const showData = ()=>{
        console.log("value of textbox=",inputRef.current.value)
    }
    return(
        <div>
            <h1>Use ref hook demo</h1>
            <input type="text" value={inputRef.current.value} ref={inputRef}/>
            <button onClick={()=>showData()}>showData</button>
        </div>
    )
}

export default UseRefHook