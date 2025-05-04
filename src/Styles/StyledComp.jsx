import styled from "styled-components";
function StyledComp() {
  // const Heading = styled.h1`
  //   color: red;
  // `;

  const Heading = styled.h1({
    color: "red",
  });
  return (
    <>
      <Heading>Styled Component</Heading>
    </>
  );
}
export default StyledComp;
