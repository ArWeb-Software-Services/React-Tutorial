import { useContext } from "react";
import { SubjectContext } from "./ContextData";

function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <>
      <div style={{ backgroundColor: "red", padding: "20px" }}>
        <h2>Subject Component</h2>
        <h3>{subject} </h3>
      </div>
    </>
  );
}

export default Subject;
