
function Message(){
    const message = "Hello, World!";
    // This is a simple message variable that holds the text to be displayed
    if (!message) {
        return <div className="message">No message available</div>; 
    }
    return <div>{ message }</div>;
}

export default Message;
// This code defines a simple React component named Message that returns a string containing HTML markup for a div with the class "message" and the text "Hello, World!".