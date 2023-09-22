"use client"
import React, { useState } from "react";
import Button from "./Button";

interface Subject {
  name: string;
  score: number;
}

function App() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subjectName, setSubjectName] = useState("");
  const [subjectScore, setSubjectScore] = useState(0);

  const handleSubjectNameChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setSubjectName(event.target.value);
  };

  const handleSubjectScoreChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newScore = parseInt(event.target.value, 10);
    setSubjectScore(newScore);
  };

  const handleSaveClick = () => {
    if (subjectName && subjectScore >= 0) {
      const newSubject: Subject = { name: subjectName, score: subjectScore };
      setSubjects([...subjects, newSubject]);
      setSubjectName("");
      setSubjectScore(0);
    }
  };

  //   value={subjectName} onChange={handleSubjectNameChange}
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Mata Pelajaran"
          value={subjectName}
          onChange={handleSubjectNameChange}
        />
        <input
          type="number"
          placeholder="Nilai"
          value={subjectScore}
          onChange={handleSubjectScoreChange}
        />
        <Button colorSchema="red" variant="solid" title="simpan" />
      </div>
      <div>
        {subjects.map((subject, index) => (
          <div key={index}>
            <p>Mata Pelajaran: {subject.name}</p>
            <p>Nilai: {subject.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
