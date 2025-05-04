const ForRefChild = (props) => {
  return (
    <>
      <input type="text" ref={props.ref} />
    </>
  );
};
export default ForRefChild;
