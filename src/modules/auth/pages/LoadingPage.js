import React from "react";
import Plane from "../../../component/customIcons/Plane";

function LoadingPage() {
  return (
    <div className="loading">
      <div className="textContainer">
        <p>Content Is Loading...</p>
        <p>Please do not refresh</p>
      </div>
      <Plane className={"plane"} />
    </div>
  );
}

export default LoadingPage;
