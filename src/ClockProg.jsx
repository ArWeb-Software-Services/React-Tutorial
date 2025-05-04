import { useEffect, useState } from "react";

function ClockProg() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  const [color, setColor] = useState("red");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option value={"red"}>Red</option>
          <option value={"blue"}>Blue</option>
          <option value={"green"}>Green</option>
          <option value={"yellow"}>Yellow</option>
        </select>
        <h1
          style={{
            color: color,
            backgroundColor: "black",
            width: "220px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {time}
        </h1>
      </div>
    </>
  );
}

export default ClockProg;
