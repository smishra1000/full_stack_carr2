import { useReducer,useState } from "react"



function UseReducerHook() {

    console.log(useState(0))

    const initialSate = {
        count: 0
    }

    function counterReducer(state, action) {
        if (action.type === "increment") {
            return { count: state.count + 1 }
        } else if (action.type === "decrement") {
            return { count: state.count - 1 }
        } else {
            return state
        }
    }

    const [state, dispatch] = useReducer(counterReducer, initialSate)

    const increment = () => {
        dispatch({ type: "increment" })
    }
    const decrement = () => {
        dispatch({ type: "decrement" })
    }

    return (
        <div>
            <h1>Use reducer hook demo</h1>
            <h1>Count : {state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default UseReducerHook