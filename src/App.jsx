// import { useState } from "react";
import ClockProg from "./ClockProg";
import ComponentLifeCycle from "./ComponentLifeCycle";
import PureComponent from "./Components/PureComponent";
import Conditions from "./Condition";
import ControlledComponent, {
  CheckBoxCmp,
  DropDownComp,
  RadioButtonCmp,
} from "./ControlledComponent";
import DefaultJSXProps from "./DefaulProps";
import DerivedState from "./DerivedState";
import Hooks from "./Hooks/Hooks";
import JSXLoops, { JSXReuseComp } from "./JSXLoops";
import JSXProps from "./JSXProps";
import LiftingState from "./CompCommunication/LiftingState";
import NestedLoop from "./NestedLoop";
import PassFn from "./Passing_functions/PassFn";
import Props, { BtnProps } from "./Props";
import Styles from "./Styles/Styles";
import ToggleDiv from "./ToggleDiv";
import UncontrolledComponent from "./UncontrolledComponent";
import Login, { Profile, UserKey } from "./UserComp";
import UpdtObjState from "./UpdtObjState";
import UpdtArrayState from "./UpdtArrayState";
import Fragments from "./Fragments";
import ConAPI from "./ContextAPI/ConAPI";
import NavBar from "./Routers/NavBar";
import RestAPI from "./RestAPI/RestAPI";
import LazyLoading from "./LazyLoading";
import UseAPI from "./UseAPI";

function App() {
  /* const [name, setName] = useState("ArWEb");
  const name = "ArWeb";
  let propName = "Props";
  let userObj = {
    nm: "A",
    age: 23,
  };
  const arr = ["A", "B", "C"];

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true);*/
  return (
    <>
      <GetInputValue />
      {/* <h1>Deal with Coding</h1>
      <h2>React 19.0</h2>
      <Fruit />
      <Login />
      <Profile />
      {UserKey} 
      JSX : {name}
         <JSX />
      <JSXEg />
      <AlertCall />
      <ToggleDiv />
      <Conditions />
      <Props user={userObj} />
      <Props fname={propName} /> 
      <Props arr={arr} />
       <BtnProps name={name} />
      <button onClick={() => setName("FFF")}>Change Name</button> 
      <DefaultJSXProps username="ArWeb" />
      <JSXProps>
        <h1>Text</h1>
      </JSXProps> 
      
      <ControlledComponent />
      <CheckBoxCmp />
      <RadioButtonCmp />
      <DropDownComp />
      <JSXLoops />
      <JSXReuseComp />
       <ClockProg /> 
      <NestedLoop />  
      {display ? <ComponentLifeCycle count={counter} data={data} /> : null}
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      <Styles />
   <UncontrolledComponent /> 
      <PassFn />      
      <PureComponent />
      <DerivedState />
      <LiftingState />
      <UpdtObjState />   
      <UpdtArrayState />       
      <Fragments />
        <ConAPI /> 
    <NavBar />
        <UseAPI />
      <RestAPI />
      <LazyLoading />
      <Hooks />*/}
    </>
  );
}

// function Fruit() {
//   return <>Apple</>;
// }

// function JSX() {
//   const todo = "ToDO";
//   function callFun() {
//     alert("Ok");
//   }
//   return (
//     <>
//       JSX : {todo} <button onClick={callFun}>Click</button>
//       JSX : {todo} <button onClick={() => callFun()}>Click Again</button>
//     </>
//   );
// }

// function JSXEg() {
//   const name = "Test";
//   let x = 10;
//   let y = 20;
//   const userObj = {
//     name: "arweb",
//     class: "PHP",
//   };
//   const arr = ["sam", 1, true];
//   return (
//     <>
//       Name :{name}
//       Sum : {x + y}
//       Class : {userObj.class}
//       Array : {arr[1]}
//       <input type="text" value={name} />
//     </>
//   );
// }

// function AlertCall() {
//   function callFun() {
//     alert("Called");
//   }
//   const add = (a, b) => {
//     alert(a + b);
//   };
//   return (
//     <>
//       <button onClick={callFun}>Click</button>
//       <button onClick={() => callFun()}>Click Arrow</button>
//       <button onClick={() => add(4, 5)}>Sum</button>
//     </>
//   );
// }

// function GetInputValue() {
//   const [val, setVal] = useState("");
//   return (
//     <>
//       <input
//         type="text"
//         value={val}
//         onChange={(event) => setVal(event.target.value)}
//       />
//       <h3>{val}</h3>
//       <button onClick={() => setVal("")}>Clear</button>
//     </>
//   );
// }
export default App;
