import React from "react";

function CustomButton({ type, text, onClick, className }) {
  let template = null;
  switch (type) {
    case "ORANGE":
      template = (
        <button className={`btn btn__orange ${className}`} onClick={onClick}>
          {text}
        </button>
      );
      break;

    case "TRANSPARENT":
      template = (
        <button
          className={`btn btn__transparent ${className}`}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;

    case "BLUE":
      template = (
        <button className={`btn btn__blue ${className}`} onClick={onClick} type="submit" >
          {text}
        </button>
      );

      break;
    case "WHITE":
      template = (
        <button className={`btn btn__white ${className}`} onClick={onClick}>
          {text}
        </button>
      );

      break;

    default:
      template = <button>null btn</button>;
      break;
  }
  return template;
}

export default CustomButton;
