import React, { FC } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const rootElement =
  document.querySelector("#root") || document.createElement("div");

const root = ReactDOM.createRoot(rootElement);

const Index: FC = () => {
  return <App />;
};

root.render(<Index />);

// type Props = {
//   toWhat: string;
// };

// const Hello: FC<Props> = ({ toWhat }) => {
//   return <div>Hello {toWhat}</div>;
// };

// const Hello: FC<Props> = ({ toWhat }) => {
//   return React.createElement("div", null, `Hello ${toWhat}`);
// };

// const root = ReactDOM.createRoot(
//   document.querySelector("#root") || document.createElement("div")
// );
// root.render(React.createElement(Hello, { toWhat: "world" }, null));
