import React, { useEffect, useState } from "react";

const onlineUrl='https://school-api-s1sp.onrender.com/students'
const localurl = "http://localhost:5000/students";
const url=onlineUrl
const EnglishForm = () => {
  const [students, setStudents] = useState([]);
  const [english, setEnglish] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  function handleInput(e, id) {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return {
          ...student,
          english: e.target.value,
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    for (const student of students) {
      try {
        const res = await fetch(`${url}/${student.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ science: parseInt(student.english) }),
        });

        if (!res.ok) {
          throw new Error("Failed to update student");
        }
      } catch (error) {
        console.log(error);
      }
    }

    // Reset the form
    setStudents((prevStudents) =>
      prevStudents.map((prevStudent) => ({ ...prevStudent, english: "" }))
    );
  }

  return (
    <>
      <div className="formItems">
        <form className="w-25 form-floating" onSubmit={handleSubmit}>
          <h5>English Marks</h5>
          {students.map((student) => (
            <div key={student.id}>
              <label htmlFor={`english-${student.id}`}>{student.name}</label>
              <input
                type="text"
                className="form-control mb-2"
                id={`english-${student.id}`}
                placeholder="Marks"
                value={student.english || ""}
                onChange={(e) => handleInput(e, student.id)}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary">
            Add marks
          </button>
        </form>
      </div>
      <hr />
      <h3>English Marks</h3>
      <table className="ms-4 table w-75">
        <thead className="text-center">
        <th>Name</th>
        <th>English</th>
        </thead>
       
        {students.map((student) => (
          <>
            <tbody>
              <tr>
                <td>{student.name}</td>
                <td>{student.english}</td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </>
  );
};

export default EnglishForm;
