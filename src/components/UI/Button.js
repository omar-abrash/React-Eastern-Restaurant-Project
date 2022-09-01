const Button = (props) => {
  return (
    <div>
      <button
        className={props.className}
        type={props.type || "button"}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};
export default Button;
