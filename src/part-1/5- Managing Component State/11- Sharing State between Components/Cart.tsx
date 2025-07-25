interface Props {
  cartItems: string[];
  onClear: (items: string[]) => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="bg-red-300" onClick={() => onClear(cartItems)}>
        Clear
      </button>
    </>
  );
};

export default Cart;
