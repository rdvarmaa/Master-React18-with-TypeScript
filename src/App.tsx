import ListGroup from "./components/ListGroup";
import ListGroupWithHook from "./components/ListGroupWithHook";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      {/* This is where the ListGroup component is rendered */}
      <ListGroup />
      <ListGroupWithHook />
      {/* This is where the Message component is rendered */}
    </div>
  );
}
export default App;
// This code defines a React component named App that renders a div with the class "App" and includes the Message component.
