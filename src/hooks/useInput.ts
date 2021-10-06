import React, { useState } from "react";

const useInput = () => {
  const [inputVal, setInputVal] = useState("");
  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputVal(e.target.value);
  };
  return { inputVal, handleInput };
};

export default useInput;
