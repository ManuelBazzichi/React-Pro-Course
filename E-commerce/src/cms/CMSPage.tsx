import { Outlet, NavLink } from "react-router-dom";

export function CMSPage() {
  const isActive = (obj: { isActive: boolean }) => {
    return obj.isActive ? "btn primary" : "btn";
  };

  return (
    <div>
      <NavLink to="cms/products" className={isActive}></NavLink>
      <NavLink to="cms/products" className={isActive}></NavLink>

      {/* Used to render child route elements in nested Routes */}
      <Outlet />
    </div>
  );
}
