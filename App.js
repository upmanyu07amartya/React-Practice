import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div id="parent">
    <div id = "child">
        <h1>Hello</h1>
        <h1>Amartya</h1> hoow to create siblings? In the 3rd argument of its parent, pass both elements in an array
    </div>
</div> */
}
// Way to create nested elements

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h1", {}, "Amartya"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log("1230", parent);
