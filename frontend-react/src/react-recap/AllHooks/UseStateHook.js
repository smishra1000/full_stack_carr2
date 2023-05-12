import {useState} from "react"

const users1 = [
    {
        id:1,
        name:"sameer"
    }
]

function UseStateHook(){
    const [age,setAge] = useState(10)
    const [name,setName] = useState("sameer")
    const [users,setUsers]  = useState(users1)

    const changeAge = ()=>{
        setAge(age+1)
    }

    const addUsers = ()=>{
        setUsers((users)=>[...users,{id:2,name:"sameer22"}])
    }
    return(
        <div>
            <h1> Use state hook recap</h1>
            <h1> Age : {age}</h1>
            <h1> Name: {name}</h1>
            <button onClick={()=>changeAge()}>Change Age</button>
            <button onClick={()=>setName("sameer2")}>Change Name</button>
            <ul>
                {users.map((user)=>{
                    return(
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>

            <button onClick={()=>addUsers()}>Add User</button>
        </div>
    )
}

export default UseStateHook



// //library 

// function useState(value){
//     return [value,setValue]
// }