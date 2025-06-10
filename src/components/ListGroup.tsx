function ListGroup() {
  const items = [
    "Kerala",
    "Tamilnadu",
    "Karnataka",
    "Thelankana",
    "Andhra Pradesh",
    "Maharashtra",
  ];
  // This is an array of items that will be displayed in the list group
  return (
    // Fragment syntax is used to return multiple elements without adding extra nodes to the DOM
    <>
      <h1>List Group</h1>
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
          <li className="list-group-item" key={index}>
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
