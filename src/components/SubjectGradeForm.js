function SubjectGradeForm() {
    return (
      <div className="student-form container">
        <form>
          <div className="row mb-3">
            <label htmlFor="student-select" className="col-sm-2 col-form-label">
              Students
            </label>
            <div className="col-sm-10">
              <select className="form-select" id="student-select" name="students">
                <option value="James">James</option>
                <option value="Peter">Peter</option>
              </select>
            </div>
          </div>
  
          <div className="row mb-3">
            <label htmlFor="grade-input" className="col-sm-2 col-form-label">
              Grade
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="grade-input" placeholder="Enter subject grade" />
            </div>
          </div>
  
          <div className="row mb-3">
            <label htmlFor="subject-select" className="col-sm-2 col-form-label">
              Subject
            </label>
            <div className="col-sm-10">
              <select className="form-select" id="subject-select" name="subjects">
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
            </div>
          </div>
  
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-outline-secondary btn-sm">
                Add Grade
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default SubjectGradeForm;
  