import { useState } from "react";

const useToogleCustom = (defaultVal) => {
  const [isToggled, setIsToggled] = useState(defaultVal);
  function toggleVal(val) {
    if (typeof val != "boolean") {
      setIsToggled(!isToggled);
    } else {
      setIsToggled(val);
    }
  }
  return [isToggled, toggleVal];
};

export default useToogleCustom;
