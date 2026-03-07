import "./Button.css";

function Button({ ClickFunc, label= "Click Me" }) {
  return (
    <button onClick={ClickFunc} className="Button">
      {label}
    </button>
  );
}

export default Button;