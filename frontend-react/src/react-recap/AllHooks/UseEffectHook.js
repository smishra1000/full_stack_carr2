import { useEffect, useState } from "react";

function UseEffectHook() {

    const [count, setCount] = useState(0)

    const [age, setAge] = useState(10)

    const [users, setUsers] = useState([])

    // // 1. without any dependency
    // // useEffect(()=>{
    // //     console.log("hello ")
    // // })
    //  // 2. with empty array  dependency
    // //  useEffect(()=>{
    // //     console.log("hello ")
    // // },[])


    //   // 3. with state/props dependency
    //   useEffect(()=>{
    //     console.log("hello ")
    // },[age,count])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(function (res) {
            return res.json()
        }).then(function (data) {
            console.log("hello")
            setUsers(data)
        })
    },[])




    return (
        <div>
            {/* <h1>Count : {count}</h1>
            <h1>Age {age}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setAge(age+1)}>Change Age</button>
            <h1>Use effect hook demo</h1> */}
            <ul>
                {users.map((user) => {
                    return(
                    <li> {user.id} {user.name} {user.username} {user.email}</li>
                    )
                })}
            </ul>

        </div>
    )
}


export default UseEffectHook