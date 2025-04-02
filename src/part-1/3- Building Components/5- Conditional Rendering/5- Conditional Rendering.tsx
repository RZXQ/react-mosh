export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  items = []; // For demonstration: array intentionally emptied.

  return (
    <>
      <h1>List</h1>

      {/* 1. Render "<p>No item found</p>" only when array is empty (length === 0).
          If length isn't 0, nothing renders here. */}
      {items.length === 0 && <p>No item found</p>}

      <ul>
        {/* 2. Map through items array to render each item as <li>. If items is empty, this results in an empty <ul> with no <li> inside. */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div>
        {/* 3. Examples demonstrating JSX rendering of JavaScript falsy values */}
        {false} {/* ❌ "false" renders nothing */}
        {null} {/* ❌ "null" renders nothing */}
        {undefined} {/* ❌ "undefined" renders nothing */}
        {""} {/* ❌ empty string "" renders nothing */}
        {0} {/* ✅ number "0" renders as "0" */}
        {-0} {/* ✅ negative zero "-0" renders as "0" */}
        {0n} {/* ✅ BigInt zero "0n" renders as "0" */}
        {NaN} {/* ✅ NaN renders as "NaN" */}
      </div>
    </>
  );
}
