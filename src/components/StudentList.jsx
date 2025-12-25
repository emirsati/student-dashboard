import StudentItem from './StudentItem';

function StudentList({ students }) {
  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </ul>
  );
}

export default StudentList;