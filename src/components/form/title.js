import React from "react";

function Title(props) {
  const titleStyle = {
    textTransform: "uppercase",
    borderBottom: "2px #999999 solid",
    marginBottom: "24px",
  };

  return (
    <div className="text-muted py-2" style={titleStyle}>
      {props.title}
    </div>
  );
}

export default Title;
