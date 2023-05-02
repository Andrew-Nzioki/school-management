import React, { useEffect, useState } from "react";

const url = "http://localhost:5000/students";

const MathematicsForm = () => {
  const [students, setStudents] = useState([]);
  const [mathematics, setMathematics] = useState("");

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
          mathematics: e.target.value,
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
          body: JSON.stringify({ mathematics: parseInt(student.mathematics) }),
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
      prevStudents.map((prevStudent) => ({ ...prevStudent, mathematics: "" }))
    );
  }

  return (
    <>
      <div className="formItems">
        <form className="w-25 form-floating" onSubmit={handleSubmit}>
          <h5>Mathematics Marks</h5>
          {students.map((student) => (
            <div key={student.id}>
              <label htmlFor={`mathematics-${student.id}`}>
                {student.name}
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id={`mathematics-${student.id}`}
                placeholder="Marks"
                value={student.mathematics || ""}
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
      <table className="ms-2">
        <thead className="text-center">Scince Marks</thead>
        <th>Name</th>
        <th>Science</th>
        {students.map((student) => (
          <>
            <tbody>
              <tr>
                <td>{student.name}</td>
                <td>{student.mathematics}</td>
              </tr>
            </tbody>
          </>
        ))}
      </table>
    </>
  );
};

export default MathematicsForm;
