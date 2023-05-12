 import {useState} from "react"
function UeStateHook(){
    const [counter,setCounter] = useState(0)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [show,setShow] = useState(false)

    function increment(){
        setCounter(counter+1)
    }
    function onHandleFirstName(e){
        setFirstName(e.target.value)
    }
    function onHandleLastName(e){
        setLastName(e.target.value)
    }

    function showData(){
        setShow(!show)
    }
    return(
        <div>
        <h1>use State hook demo</h1>
        <h4>Counter : {counter}</h4>
        <button onClick={increment}>increment</button>
        <input type="text" value={firstName} onChange={onHandleFirstName}/>
        <input type="text" value={lastName} onChange={onHandleLastName}/>
        <button onClick={showData}>show data</button>
        <button onClick={showData}>hide data</button>
        {show && <div>
            <h4>firstName : {firstName}</h4>
            <h4>lastName : {lastName}</h4>
        </div>}
        </div>
    )
}

export default UeStateHook






// this.state = {
//     counter:0
// }

// this.setState({counter:this.state.counter+1})