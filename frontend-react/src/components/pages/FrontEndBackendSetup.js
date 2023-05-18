import {useState,useEffect} from "react"

function FrontendBackendSetup(){
    const [employees,setEmployees] = useState([])

    useEffect(()=>{
        fetch("http://localhost:7000/employee").then(function(res){
            return res.json()
        }).then(function(result){
            setEmployees(result)
        })
    },[])
    return(
        <div>
            <h1>Hello frontend backend setup</h1>

            {employees.map((emp)=>{
                return(
                    <li> ID {emp.id }  Name : {emp.name} Salary  : {emp.salary}</li>
                )
            })}

        </div>
    )
}

export default FrontendBackendSetup