import React from "react";

const Input = React.forwardRef((props, ref) => {
  //
  // const inputRef = useRef();
  //
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.lable}</label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        value={props.value}
        placeholder={props.placeholder}
        max={props.max}
        min={props.min}
        className={props.className}
      />
    </div>
  );
});
export default Input;
