import  React,{useEffect,useState} from 'react'
import "./App.css"

import StudentInfo from "./components/StudentInfo"
import SubjectGradeForm from "./components/SubjectGradeForm"
import Header from "./components/Header"
import StudentsList from "./components/StudentsList"

const url='http://localhost:5000/students'
function App() {
 const [students,setStudents]=useState([])
useEffect(()=>{
  fetch(url)
  .then(res=>res.json())
  .then(data=>setStudents(data))
},[])
  return (
    <div className="App">
      <Header />
      <SubjectGradeForm students={students}/>
      <StudentInfo students={students}/>
      <StudentsList students={students}/>
     
    </div>
  );
}

export default App
