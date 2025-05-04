import { useState } from "react";
function ControlledComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Controlled Component</h1>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <br />
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        />
        <br />
        <br />
        <button>Submit</button>

        <button
          onClick={() => {
            setName("");
            setEmail("");
            setPassword("");
          }}
        >
          Clear
        </button>
        <br />
        {name}
        {email}
        {password}
      </form>
    </>
  );
}

export function CheckBoxCmp() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((skill) => skill !== event.target.value)]);
    }
  };
  return (
    <>
      <h2>Select your skills</h2>
      <input type="checkbox" id="php" value="PHP" onChange={handleSkills} />
      <label htmlFor="PHP">PHP</label>
      <br />
      <input type="checkbox" id="js" value="JS" onChange={handleSkills} />
      <label htmlFor="PHP">JS</label>
      <br />
      <input type="checkbox" id="node" value="Node" onChange={handleSkills} />
      <label htmlFor="PHP">Node</label>
      <br />
      <input type="checkbox" id="java" value="Java" onChange={handleSkills} />
      <label htmlFor="PHP">Java</label>
      <br /> <br />
      <h1>{skills.toString()} </h1>
    </>
  );
}

export function RadioButtonCmp() {
  const [gender, setGender] = useState("Male");
  return (
    <>
      <h4>Select Gender: {gender} </h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"Male"}
        checked={gender === "Male"}
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        value={"Female"}
        checked={gender === "Female"}
        onChange={(event) => setGender(event.target.value)}
        id="female"
      />
      <label htmlFor="female">Female</label>
    </>
  );
}

export function DropDownComp() {
  const [city, setCity] = useState("Kolkata");
  return (
    <>
      <h1>Select City :</h1>
      <select
        onChange={(event) => setCity(event.target.value)}
        name="city"
        id="city"
        defaultValue={"Kolkata"}
      >
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Banglore">Banglore</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
      </select>
      <h3>Selected City : {city} </h3>
    </>
  );
}
export default ControlledComponent;
