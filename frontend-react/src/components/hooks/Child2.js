import { useContext } from "react"
import {NameContext, UserContext} from "./Parent"
function Child2(){
    const name = useContext(NameContext)
    const user = useContext(UserContext)
    return(
        <div>
            <h1>Child2 {name} {user.name} {user.age}</h1>
        </div>
    )
}
export default Child2