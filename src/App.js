import "./App.css";
import StudentInfo from "./components/StudentInfo";
import SubjectGradeForm from "./components/SubjectGradeForm";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <SubjectGradeForm />
      <StudentInfo />
    </div>
  );
}

export default App;
