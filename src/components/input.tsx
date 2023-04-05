type InputProps = {
  rounded?: boolean;
  label?: string;
  validation?: string;
};

const Input = ({ rounded, label, validation }: InputProps) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : ""}
      <input
        id={label}
        className={`input ${rounded ? "input--rounded" : ""}`}
        type="text"
      />
      {validation ? <p className="validation-success">Success!</p> : ""}
    </>
  );
};

export default Input;
