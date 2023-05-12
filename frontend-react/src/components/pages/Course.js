import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
//import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import { Grid } from '@material-ui/core';
// import {Item} from "@material-ui/core"
// import Item from "@material-ui/core"

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CourseList from './CourseList';
function Course() {

    const [courseName, setCourseName] = useState("")
    const [instructor, setInstructor] = useState("")
    const [fee, setFee] = useState("")
    const [description, setDesciption] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onDescriptionChange = (e) => {
        setDesciption(e.target.value)
    }
    const onFeeChange = (e) => {
        setFee(e.target.value)
    }
    const onInstructorChange = (e) => {
        setInstructor(e.target.value)
    }
    const onCourseNameChange = (e) => {
        setCourseName(e.target.value)
    }
    const saveCourse = (e)=>{
        e.preventDefault()
        let course = {
            courseName,
            fee,
            description,
            instructor
        }
        dispatch({type:"ADD_COURSE",payload:course})
        navigate("/course-list")
    
    }

    return (
        <div>
            <h1>Course Component</h1>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Course Name" variant="outlined" value={courseName} onChange={(e) => onCourseNameChange(e)} />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="fee" variant="outlined" value={fee} onChange={(e) => onFeeChange(e)} />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="Instructor" variant="outlined" value={instructor} onChange={(e) => onInstructorChange(e)} />
                </Grid>
                <Grid item xs={4}>
                    <TextField id="outlined-basic" label="description" variant="outlined" value={description} onChange={(e) => onDescriptionChange(e)} />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" onClick={(e)=>saveCourse(e)}>Save</Button>
                </Grid>
            </Grid>
            {/* <CourseList/> */}

        </div>
    )
}



export default Course