import type { MouseEvent } from "react";
import { useState } from "react";
function ListGroupWithHook() {
  let items = [
    "Kerala",
    "Tamilnadu",
    "Karnataka",
    "Thelankana",
    "Andhra Pradesh",
    "Maharashtra",
  ];

  const handleClick = (event: MouseEvent) => {
    console.log(event.currentTarget.textContent);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  //items = []; // This line clears the items array, making it empty
  // This is an array of items that will be displayed in the list group
  return (
    // Fragment syntax is used to return multiple elements without adding extra nodes to the DOM
    <>
      <h1>List Group With Hook</h1>

      {items.length === 0 && (
        <div className="alert alert-warning">No items found</div>
      )}
      {/* This is a heading for the list group */}
      <ul className="list-group">
        {/*  This is a React component that renders a list group using Bootstrap classes */}
        {/*
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => {
              setSelectedIndex(index); // Update the selected index when an item is clicked
              handleClick(event); // Call the handleClick function to log the clicked item
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroupWithHook;

//
// This code defines a React component named ListGroupWithHook that renders a list group using Bootstrap classes.
// The component uses the useState hook to manage the selected index of the list items.
// When a list item is clicked, the selected index is updated, and the clicked item's text content is logged to the console.
