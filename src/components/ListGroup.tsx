import type { MouseEvent } from "react";

interface ListGroupProps {
  // Define any props that ListGroup might need
  items?: string[]; // Optional prop to pass items
  title?: string; // Optional prop for title
}

function ListGroup({ items = [], title = "List Group" }: ListGroupProps) {
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>{title}</h1>

      {items.length === 0 && (
        <div className="alert alert-warning">No items found</div>
      )}
      <ul className="list-group">
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
// The component accepts props for items and title, with default values if not provided.
