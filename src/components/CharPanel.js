import React from "react";
import { Helmet } from "react-helmet-async";

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
        <Helmet>
          <title>
            {name} - {server} | FFXIV Wiki
          </title>
        </Helmet>
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

  return <>{result}</>;
};

export default CharPanel;
