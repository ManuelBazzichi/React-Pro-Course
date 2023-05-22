import { Product } from "../../model/product";
import { useEffect, useState } from "react";
import { pb } from "../../pocketbase";
import { ProductCard } from "./components/ProductCard";
import { ServerError } from "@/shared/components/core/ServerError";
import { useCart, useCartPanel } from "../../services/cart";

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pending, setPending] = useState<boolean>();
  const [error, setError] = useState<boolean>();

  const openCartPanel = useCartPanel((state) => state.openOverlay);
  const addToCart = useCart((state) => state.addToCart);

  useEffect(() => {
    setError(false);
    setPending(true);
    pb.collection("products")
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
        setPending(false);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return (
    <div>
      <h1 className="title">SHOP</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {pending && <div>...pending</div>}
        {error && !pending && <ServerError />}

        {products.map((p) => {
          return (
            <div key={p.id}>
              <ProductCard
                product={p}
                onAddToCart={() => {
                  addToCart(p);
                  openCartPanel();
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
