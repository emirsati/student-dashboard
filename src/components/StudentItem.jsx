function StudentItem({ student, onDelete }) {
  const isPass = student.grade >= 60;
  
  return (
    <li className={`student-item ${isPass ? 'student-pass' : 'student-fail'}`}>
      <div className="info">
        <span className="student-name">{student.name}</span>
        <span className="student-grade">{student.grade}</span>
        <span className="student-status">
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(student.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default StudentItem;