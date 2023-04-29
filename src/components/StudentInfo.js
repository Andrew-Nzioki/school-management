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
              <td>Math: {student.mathematics}</td>
              <td>Eng:{student.english}</td>
              <td>Kisw:{student.kiswahili}</td>
              <td>sci: {student.science}</td>
              <td>SST:{student.sst}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr/>
    </div>
  );
}
export default StudentInfo;
