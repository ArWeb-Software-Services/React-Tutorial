import { useState } from "react";
import Collage from "./Collage";
import { SubjectContext } from "./ContextData";

function ConAPI() {
  const [subject, setSubject] = useState("ReactJS");
  return (
    <>
      <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
        <SubjectContext.Provider value={subject}>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Select subject</option>
            <option value="ReactJS">ReactJS</option>
            <option value="NodeJS">NodeJS</option>
            <option value="PHP">PHP</option>
            <option value="Java">Java</option>
          </select>
          <h1>ConextAPI</h1>
          <button onClick={() => setSubject("")}>Clear Subject</button>
          <Collage />
        </SubjectContext.Provider>
      </div>
    </>
  );
}

export default ConAPI;
