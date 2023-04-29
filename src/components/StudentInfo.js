function StudentInfo({ students }) {
  return (
    <div className="container my-3">
      <hr />
      <table>
        <th>student ID</th>
        <th>student name</th>
        <th>student gender</th>
        <th>Mathematics</th>
        <th>English</th>
        <th>Kiswahili</th>
        <th>SST</th>
        <th>Science</th>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.mathematics}</td>
              <td>{student.english}</td>
              <td>{student.kiswahili}</td>

              <td>{student.science}</td>
              <td>{student.sst}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentInfo;
