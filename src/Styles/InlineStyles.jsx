import { useState } from "react";

function InlineStyles() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid black",
    width: "200px",
    boxShadow: "2px 2px 5px gray",
    margin: "10px",
  });

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor, color: textColor });
  };

  return (
    <>
      <h1>Inline Styles</h1>
      <div style={{ color: "red", backgroundColor: "yellow" }}>Hello</div>
      <h2>Dynamic and Condiional Style</h2>
      <button onClick={() => updateTheme("grey", "green")}>Grey</button>
      <button onClick={() => updateTheme("white", "black")}>Default</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://picsum.photos/200/300"
            alt="img"
          />

          <div style={{ padding: "5px" }}>
            <h3>Soumyanjan Dey</h3>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default InlineStyles;
