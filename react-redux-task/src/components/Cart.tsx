import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import type { RootState, AppDispatch } from "../store/store";

export default function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  console.log(items);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <h2>Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

