function StudentForm() {
  return (
    <form className="student-form">
      <input type="text" placeholder="Name" className="input" />
      <input type="number" placeholder="Grade" className="input input-grade" />
      <button type="submit" className="btn">Add</button>
    </form>
  );
}

export default StudentForm;