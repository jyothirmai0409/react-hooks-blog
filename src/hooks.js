import { useState } from "react";

export function useFormInput(initialVlaue) {
  const [value, setValue] = useState(initialVlaue);
  const handleChange = (e) => {
    if (!e) {
      setValue("");
    }
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
}
