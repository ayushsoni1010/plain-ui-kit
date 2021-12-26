import "./input.component.style.css";

export default function Input(InputProps) {
  // validating input-size
  let inputSize;
  switch (InputProps.size) {
    case "small":
      inputSize = "pu-input__small";
      break;
    case "medium":
      inputSize = "pu-input__medium";
      break;
    case "large":
      inputSize = "pu-input__large";
      break;
    default:
      inputSize = "pu-input__small";
      break;
  }
  return <input className={`pu-input ${inputSize}`} {...InputProps} />;
}
