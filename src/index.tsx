import React, { FC } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Hellower: FC = () => {
  return <h1>Hello, world 234</h1>;
};

root.render(<Hellower />);
