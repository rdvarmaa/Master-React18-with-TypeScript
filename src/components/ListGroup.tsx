import type { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "Kerala",
    "Tamilnadu",
    "Karnataka",
    "Thelankana",
    "Andhra Pradesh",
    "Maharashtra",
  ];

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  //items = []; // This line clears the items array, making it empty
  // This is an array of items that will be displayed in the list group
  return (
    // Fragment syntax is used to return multiple elements without adding extra nodes to the DOM
    <>
      <h1>List Group</h1>

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
          <li className="list-group-item" onClick={handleClick} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

// This code defines a React component named ListGroup that renders a list group using Bootstrap classes.
// The component returns a fragment containing a heading and an unordered list with several list items.
// The list items are generated dynamically from an array of items using the map function.
// Each list item is assigned a unique key based on its index in the array to help React identify which items have changed, are added, or are removed.
// The component also includes a conditional rendering statement that displays a warning message if the items array is empty.
// The handleClick function is defined to log the event when a list item is clicked, but it does not perform any other actions.
// The component is exported as the default export of the module, allowing it to be imported and used in other parts of the application.
