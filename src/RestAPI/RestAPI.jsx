import GETAPI from "./GETAPI";
import POSTAPI from "./POSTAPI";
import PUTAPI from "./PUTAPI";

function RestAPI() {
  return (
    <div>
      <h1>RestAPI</h1>

      <GETAPI />
      <POSTAPI />
      <PUTAPI />
    </div>
  );
}

export default RestAPI;
