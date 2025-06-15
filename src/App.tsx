import ListGroup from "./components/ListGroup";
import ListGroupWithHook from "./components/ListGroupWithHook";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      {/* This is where the ListGroup component is rendered */}

      <Alert>
        This is a custom alert message that can be passed as a prop.
      </Alert>
      <ListGroup
        items={[
          "Kerala",
          "Tamilnadu",
          "Karnataka",
          "Thelankana",
          "Andhra Pradesh",
          "Maharashtra",
        ]}
        title="States in India"
        onSelectItem={(item: string) => console.log("Selected item:", item)}
      />
      <ListGroupWithHook />
      {/* This is where the Message component is rendered */}
    </div>
  );
}
export default App;

// This code defines a React component named App that renders a div with the class "App" and includes the Message component.
