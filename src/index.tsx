import { FC } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const rootElement =
  document.querySelector("#root") || document.createElement("div");

const root = ReactDOM.createRoot(rootElement);

const Index: FC = () => {
  return <App />;
};

root.render(<Index />);
