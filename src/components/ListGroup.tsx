function ListGroup() {
  return (
    // Fragment syntax is used to return multiple elements without adding extra nodes to the DOM
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {/*  This is a React component that renders a list group using Bootstrap classes */}
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}
export default ListGroup;
// This code defines a React component named ListGroup that renders a list group with three items. Each item has a heading, a timestamp, and some placeholder content. The first item is marked as active, while the others are not. The component uses Bootstrap classes for styling.
