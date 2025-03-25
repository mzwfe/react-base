import { useState } from "react";
import Father from "../components/father";

function FatherView() {
  const [childNumber, setChildNumber] = useState(0);
  const [fatherString, setFatherString] = useState('');
  const setZero = (info: string) => {
    setFatherString(info);
    setChildNumber(0);
  };

  return (
    <>
      <Father childNumber={childNumber} setToZeroClick={setZero}>
        <button onClick={() => setChildNumber(childNumber - 1)}>-1</button>
        <button onClick={() => setChildNumber(childNumber + 1)}>+1</button>
      </Father>
      fatherString: {fatherString}
    </>
  );
}

export default FatherView;
