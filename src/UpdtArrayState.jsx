import { useState } from "react";

function UpdtArrayState() {
  const [data, setData] = useState(["A", "B", "C"]);
  const [dataDetails, setDataDetails] = useState([
    {
      name: "ArWeb",
      age: 23,
    },
    {
      name: "ArWeb",
      age: 23,
    },
    {
      name: "ArWeb",
      age: 23,
    },
    {
      name: "ArWeb",
      age: 23,
    },
  ]);

  const handleUser = (val) => {
    console.log(val);
    data[data.length - 1] = val;
    setData([...data]);
  };
  const handleAge = (val) => {
    console.log(val);
    dataDetails[dataDetails.length - 1].age = val;
    setDataDetails([...dataDetails]);
  };
  return (
    <>
      <h1>UpdtArrayState</h1>
      <h2> {name} </h2>
      {/* <button onClick={() => setName("T")}>Update</button> */}
      <input
        type="text"
        placeholder="Enter Last user"
        onChange={(e) => handleUser(e.target.value)}
      />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <hr />
      <input
        type="text"
        placeholder="Enter Last age"
        onChange={(e) => handleAge(e.target.value)}
      />
      {dataDetails.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <h4>{item.age}</h4>
        </div>
      ))}
    </>
  );
}

export default UpdtArrayState;
