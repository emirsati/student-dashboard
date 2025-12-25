import StudentItem from './StudentItem';

function StudentList({ students, onDelete, searchTerm }) {

  if (students.length === 0) {
    if (searchTerm) {
      return (
        <p className="no-data">
          No students match "<em>{searchTerm}</em>"
        </p>
      );
    }
    return <p className="no-data">No students yet</p>;
  }

  return (
    <ul className="student-list">
      {students.map((student) => (
        <StudentItem 
          key={student.id} 
          student={student} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}

export default StudentList;