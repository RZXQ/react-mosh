import { List } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function ListGroup() {
  return (
    <>
      <Heading size="2xl">List</Heading>
      <List.Root>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
        <List.Item>Item 4</List.Item>
        <List.Item>Item 5</List.Item>
      </List.Root>
    </>
  );
}

export default ListGroup;
