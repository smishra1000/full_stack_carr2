const initialState = {
    courses:[]

}

const CourseReducer = (state=initialState,action)=>{
    console.log(state,action)
    if(action.type==="ADD_COURSE"){
        return {
            ...state,
            courses:[
                ...state.courses,
                action.payload

            ]
        }
    }else {
        return state
    }
}

// name 
// fee 
// instructor 
// description

export default CourseReducer