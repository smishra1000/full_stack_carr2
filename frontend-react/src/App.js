import logo from './logo.svg';
import './App.css';
import ES6 from './components/es6';
// import UeStateHook from './components/hooks/UseStateHook';
// import UseEffectHook from './components/hooks/UseEffectHook';
// import UseContextHook from './components/hooks/UseContextHooks';
import Parent from './components/hooks/Parent';
import {BrowserRouter,Routes,Route,Router} from "react-router-dom"
import Dashboard from './components/pages/Dashboard';
import Header from './components/pages/Header';
// import UseRefHook from './react-recap/AllHooks/UseRefHook';
// import UseRefHook from './components/hooks/UserRefHook';
// import UseReducerHook from './components/hooks/UseReducerHook';
import CrudDemo from './components/pages/CrudDemo';
import Lifecycle from './react-recap/Lifecycle';
import UseStateHook from './react-recap/AllHooks/UseStateHook';
import UseEffectHook from './react-recap/AllHooks/UseEffectHook';
import UseRefHook from './react-recap/AllHooks/UseRefHook';
import Course from './components/pages/Course';
import CourseList from './components/pages/CourseList';


function App() {
  return (
    <div className="App">
     {/* <ES6/> */}
     {/* <UeStateHook/>
     <UseEffectHook/>
     <UseContextHook/>
     <UseRefHook/>
     <UseReducerHook/> */}
     {/* <Parent name="sameer"/> */}
     <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/cruddemo" element={<CrudDemo/>}></Route>
      <Route path="/lifecycle" element={<Lifecycle/>}></Route>
      <Route path="/course" element={<Course/>}></Route>
      <Route path="/course-list" element={<CourseList/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>
     </Routes>
     </BrowserRouter>
     {/* <Lifecycle address="hyd"/> */}
     {/* <UseStateHook/>
    <UseEffectHook/>
    <UseRefHook/> */}

    </div>
  );
}

export default App;
