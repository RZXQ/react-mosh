// JSX: JavaScript XML
// Pascal Casing
function Message() {
  const name = "Reacher";
  if (name) {
    return <h1>Hello, {name}!</h1>;
  }
  return <h1>Hello, Guest!</h1>;
}

export default Message;
