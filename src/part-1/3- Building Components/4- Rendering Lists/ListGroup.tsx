import { List } from "@chakra-ui/react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <List.Root>
        {items.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default ListGroup;
