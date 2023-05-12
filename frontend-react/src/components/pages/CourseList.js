import { useSelector } from "react-redux"

function CourseList() {
    const courses = useSelector(state => state.courseData.courses)
    return (
        <div>
            <h1>Course List</h1>
            { courses && courses.map((course) => {
                return (
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={process.env.PUBLIC_URL + "react-logo.jpg"} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{courses.courseName}</h5>
                            <p className="card-text">{course.description}</p>
                            <a href="#" className="btn btn-primary">{course.fee}</a>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}


export default CourseList
