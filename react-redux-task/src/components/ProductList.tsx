import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import type { AppDispatch } from "../store/store";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ];

  return (
    <>
      {products.map(p => (
        <div key={p.id}>
          {p.name}
          <button
            onClick={() => dispatch(addToCart(p))}
          >
            Add
          </button>
        </div>
      ))}
    </>
  );
}

