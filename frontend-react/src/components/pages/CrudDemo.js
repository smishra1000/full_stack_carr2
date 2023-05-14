import { useEffect, useState } from "react"

function CrudDemo() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/user").then(function(res){
            return res.json()
        }).then(function(data){
            console.log("data recieved from node server",data)
            setUsers((users) => [...users,...data])
        })
    },[])

    const onFirstNameChange = (e) => {
        setFirstName(e.target.value)

    }
    const onLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const saveData = (e) => {
        e.preventDefault();
        let user = {
            firstname,
            lastname,
            email
        }
        setUsers((users) => [...users, user])
        setEmail("")
        setFirstName("")
        setLastName("")
    }

    const deleteUser = (e,user)=>{
        e.preventDefault();
        const deleteMethod = {
            method: 'DELETE', // Method itself
            headers: {
             'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            // No need to have body, because we don't send nothing to the server.
           }
           // Make the HTTP Delete call using fetch api
           fetch(`http://localhost:4000/user/${user.id}`, deleteMethod) 
           .then(response => response.json()).then((data)=>{
            setUsers(data)
           }).catch((err)=>{
                console.log(err)
           })
    }
    const editUser = (e,user)=>{
        console.log(user)
        setFirstName(user.firstname)
        setLastName(user.lastname)
        setEmail(user.email)
    }

    const updateData = (e)=>{
        e.preventDefault();
       let newUsers =  users.map((user)=>{
            if(user.email===email) {
                return {
                    ...user,
                    firstname,
                    lastname
                }
            }
            return user;
        })
        setUsers(newUsers)
        setFirstName("")
        setLastName("")
        setEmail("")
    }
    return (
        <div className="container">
            <div className="row">
                <h1>Crud Demo App Using React</h1>
                <form>
                    <div className="mb-3">
                        <label  className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstname" value={firstname} onChange={onFirstNameChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastname" value={lastname} onChange={onLastNameChange} />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" value={email} onChange={onEmailChange} />
                    </div>
                    <button className="mb-3 btn btn-success" type="submit" onClick={saveData}>Save</button>
                    <button className="mb-3 btn btn-info" type="submit" onClick={updateData}>Update</button>
                </form>
            </div>
            <div className="row" style={{marginTop:'10px'}}>
                {users.map((user,index) => {
                    return (
                        <div className="col-md-3" key={user.id}>
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={process.env.PUBLIC_URL+"user-profile.jpg"} className="" alt="..." style={{ height: '100px !important' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{user.firstname} {user.lastname}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <a href="#" className="btn btn-primary" onClick={(e)=>editUser(e,user)}>edit</a>
                                    <a href="#" className="btn btn-danger" onClick={(e)=>deleteUser(e,user)}>delete</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default CrudDemo