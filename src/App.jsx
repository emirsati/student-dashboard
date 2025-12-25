import { useState } from 'react';
import './styles/lab-styles.css';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';

const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>
      <StudentForm onAdd={addStudent} students={students} />
      <StudentControls />
      <StudentList students={students} onDelete={deleteStudent} />
    </div>
  );
}

export default App;