import { createContext } from "react"
import Child1 from "./Child1"
export const NameContext = createContext()
export const UserContext = createContext()

function Parent() {
    return (
        <UserContext.Provider value={{name:"sameer",age:"20"}}>
             <NameContext.Provider value="sameer">
            <div>
                <Child1/>
            </div>
        </NameContext.Provider>
        </UserContext.Provider>
       

    )
}
export default Parent