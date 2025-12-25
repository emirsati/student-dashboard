import { useState } from 'react';

function StudentForm({ onAdd, students }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Name cannot be empty');
      return;
    }

    const numGrade = Number(grade);
    if (grade === '' || isNaN(numGrade) || numGrade < 0 || numGrade > 100) {
      setError('Grade must be 0-100');
      return;
    }

    const exists = students.some(
      (s) => s.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (exists) {
      setError('Student already exists');
      return;
    }

    onAdd({ id: Date.now(), name: name.trim(), grade: numGrade });
    setName('');
    setGrade('');
    setError('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Grade"
        className="input input-grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit" className="btn">Add</button>
      {error && <span className="form-error">{error}</span>}
    </form>
  );
}

export default StudentForm;