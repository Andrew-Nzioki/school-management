
import './App.css';
import StudentInfo from './components/StudentInfo';
import SubjectGradeForm from './components/SubjectGradeForm';

function App() {
  return (
    <div className="App">
    <h1>School Management</h1>
    <SubjectGradeForm/>
    <StudentInfo/>
    </div>
  );
}

export default App;
