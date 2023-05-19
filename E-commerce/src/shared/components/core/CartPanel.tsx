import { useNavigate } from "react-router-dom";
import { useCartPanel } from "../../../services/cart";

export function CartPanel() {
  const navigate = useNavigate();
  // NEW
  const closeCartPanel = useCartPanel((state) => state.closeOverlay);

  function gotoCart() {
    navigate("cart");
    // NEW
    closeCartPanel();
  }

  return (
    <div className="fixed bg-slate-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center border-b border-slate-600 pb-3 ">
          <div>Product Name</div>
          <div className="flex gap-3">
            <div>(2 x £ 20)</div>
            <div>£ 40</div>
          </div>
        </li>
      </ul>

      <div className="flex justify-end my-3 font-bold text-xl">Total: £ 40</div>

      <div className="flex justify-center">
        <button className="btn primary" onClick={gotoCart}>
          Go To Cart
        </button>
      </div>
    </div>
  );
}
