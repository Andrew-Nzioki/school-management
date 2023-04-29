function SubjectGradeForm() {
  return (
    <div>
      <h3>Enter the students Grade</h3>
      <label>
        Grade
        <input text="text" placeholder="enter subject grade" />
      </label>

      <label>
        Subject
        <select name="subjects">
          <option value="Mathematics">Mathematics</option>
          <option value="English">English</option>
          <option value="Kiswahili">Kiswahili</option>
          <option value="Science">Science</option>
          <option value="SST">SST</option>
          <option value="GEO">GEO</option>
          <option value="CIVIC & MORAL">CIVIC & MORAL</option>
          <option value="V/SKILLS">V/SKILLS</option>
          <option value="LITR">LITR</option>
          <option value="MUSIC">MUSIC</option>
        </select>
      </label>
      <button type="submit">Add Grade</button>
    </div>
  );
}
export default SubjectGradeForm;
