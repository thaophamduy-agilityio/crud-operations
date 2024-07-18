import { ChangeEvent } from "react";

interface InputPros {
  label: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange }: InputPros) => {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default Input