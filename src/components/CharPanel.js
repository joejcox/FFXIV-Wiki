import React from "react";

const CharPanel = (props) => {
  const { name, server, error } = props;
  let result;
  if (error === true) {
    result = (
      <h4>
        A character with the name "{name}" does not exist on the server {server}
      </h4>
    );
  } else {
    const { id, portrait } = props;
    result = (
      <>
        <div className="nameplate">
          <h2>
            {name}: {server} - {id}
          </h2>
        </div>
        <div className="portrait">
          <img
            src={portrait}
            alt={`Portrait of ${name} FFXIV Character`}
            className="portrait-image"
          />
        </div>
      </>
    );
  }

  return (
    <>
      {" "}
      {result} {error}{" "}
    </>
  );
};

export default CharPanel;
