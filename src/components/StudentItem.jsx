function StudentItem({ student }) {
  return (
    <li className="student-item">
      <span className="student-name">{student.name}</span>
      <span className="student-grade">{student.grade}</span>
    </li>
  );
}

export default StudentItem;