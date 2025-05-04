function Props(props) {
  console.log(props);
  return (
    <>
      <h1>React Props</h1>
      {/* User : {props.fname} */}
      {/* User1 : {props.user.nm} */}
      {/* Array: {props.arr[0]} */}
    </>
  );
}

export const BtnProps = (props) => {
  return <>Name : {props.name}</>;
};

export default Props;
