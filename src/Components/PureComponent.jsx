function PureComponent() {
  return (
    <>
      <h1>Pure Component</h1>
      <Cup guest={1} />
      <Cup guest={2} />
    </>
  );
}

const Cup = ({ guest }) => {
  let count = guest;
  return (
    <>
      <h1>
        We have {guest} guest and we have to make {count} cup of tea
      </h1>
    </>
  );
};
export default PureComponent;
