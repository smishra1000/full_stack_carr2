import {combineReducers} from "redux"

import CourseReducer from "./CourseReducer"
const rootReducer = combineReducers({courseData:CourseReducer})

export default rootReducer

