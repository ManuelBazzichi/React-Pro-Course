import { ChangeEvent, useState } from "react";
import { selectTotalCartCost, useCart } from "../../services/cart";

export function CheckoutPage() {
  const totalCost = useCart(selectTotalCartCost);

  const [user, setUser] = useState({ name: "", email: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser((state) => ({ ...state, [name]: value }));
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="text-xl my-3 border-b"> £ {totalCost}</div>
      <form className="flex flex-col gap-3">
        Your name:
        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        Your email:
        <input
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button className="btn primary">CONFIRM ORDER</button>
      </form>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
