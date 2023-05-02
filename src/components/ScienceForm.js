import React, { useEffect, useState } from "react";

const onlineUrl = "https://school-api-s1sp.onrender.com/students";
const localurl = "http://localhost:5000/students";
const url = onlineUrl;
const ScienceForm = () => {
  const [students, setStudents] = useState([]);
  const [science, setScience] = useState("");

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
          science: e.target.value,
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
          body: JSON.stringify({ science: parseInt(student.science) }),
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
      prevStudents.map((prevStudent) => ({ ...prevStudent, science: "" }))
    );
  }

  return (
    <>
      <div className="formItems">
        <form className="w-25 form-floating" onSubmit={handleSubmit}>
          <h5>Science Marks</h5>
          {students.map((student) => (
            <div key={student.id}>
              <label htmlFor={`science-${student.id}`}>{student.name}</label>
              <input
                type="text"
                className="form-control mb-2"
                id={`science-${student.id}`}
                placeholder="Marks"
                value={student.science || ""}
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
      <h3>Science Marks</h3>
      <div className="containerTable">
        
        <table className="ms-4 table w-75  table-dark table-striped">
          <thead className="text-center">
            <th>StdID</th>
            <th>Name</th>
            <th>Science</th>
          </thead>

          {students.map((student) => (
            <>
              <tbody>
                <tr>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.science}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
};

export default ScienceForm;
