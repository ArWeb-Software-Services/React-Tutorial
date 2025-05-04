import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import { useState } from "react";

function LiftingState() {
  const [user, setUser] = useState("");
  return (
    <div>
      <h1>Lifting State Up</h1>
      <AddUser setUser={setUser} />

      <DisplayUser user={user} />
    </div>
  );
}
export default LiftingState;
