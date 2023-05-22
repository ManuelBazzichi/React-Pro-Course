import { useNavigate } from "react-router-dom";
import {
  selectCartList,
  selectTotalCartItems,
  useCart,
  useCartPanel,
} from "../../../services/cart";
import { selectTotalCartCost } from "../../../services/cart";

export function CartPanel() {
  const navigate = useNavigate();
  const closeCartPanel = useCartPanel((state) => state.closeOverlay);

  const list = useCart(selectCartList);
  const totalCartItems = useCart(selectTotalCartCost);

  function gotoCart() {
    navigate("cart");

    closeCartPanel();
  }

  return (
    <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
      <ul className="flex flex-col gap-4">
        {list.map((p) => {
          return (
            <li
              key={p.product.id}
              className="flex justify-between items-center border-b border-slate-600 pb-3 "
            >
              <div>{p.product.name}</div>
              <div className="flex gap-3">
                <div>
                  ({p.qty} x {p.product.cost})
                </div>
                <div>{p.qty * p.product.cost}</div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end my-3 font-bold text-xl">
        Total: £ {totalCartItems}
      </div>

      <div className="flex justify-center">
        <button className="btn primary" onClick={gotoCart}>
          Go To Cart
        </button>
      </div>
    </div>
  );
}
