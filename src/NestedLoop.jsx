function NestedLoop() {
  const collageData = [
    {
      name: "A",
      city: "X",
      student: [
        { name: "A1", age: 23 },
        { name: "A2", age: 25 },
        { name: "A3", age: 24 },
      ],
    },
    {
      name: "B",
      city: "Y",
      student: [
        { name: "A1", age: 23 },
        { name: "A2", age: 25 },
        { name: "A3", age: 24 },
      ],
    },
    {
      name: "C",
      city: "Z",
      student: [
        { name: "A1", age: 23 },
        { name: "A2", age: 25 },
        { name: "A3", age: 24 },
      ],
    },
  ];
  return (
    <>
      <h1>Nested Looping</h1>
      {collageData.map((college, index) => (
        <div key={index}>
          <h2>Collage Name: {college.name}</h2>
          <h3>City: {college.city}</h3>
          <h4>Students:</h4>
          <ul>
            {college.student.map((student, index) => (
              <li key={index}>
                Name: {student.name}, Age: {student.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
export default NestedLoop;
