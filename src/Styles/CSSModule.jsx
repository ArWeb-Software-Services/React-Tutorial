import style from "../assets/css/css_module.module.css";

function CSSModule() {
  return (
    <>
      <h1>CSS Modules</h1>
      <div className={style.heading}> Heading</div>
    </>
  );
}
export default CSSModule;
