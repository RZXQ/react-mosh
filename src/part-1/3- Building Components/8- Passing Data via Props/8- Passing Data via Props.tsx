import { useState } from "react";

// In React, once passed into the component, props behave like a plain JavaScript object.
// The interface "Props" is defined to clearly and strictly describe the shape and
// structure of this object.
interface Props {
  items: string[];
  heading: string;
}

export default function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("");

  return (
    <>
      <h1 className="text-3xl">{heading}</h1>

      <ul className="divide-y divide-amber-300">
        {items.map((item, index) => (
          <li
            className="py-4"
            key={item}
            onClick={() => {
              setName(item);
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
