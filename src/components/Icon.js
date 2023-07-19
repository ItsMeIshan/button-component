import React from "react";
import { Airplay, Book, Delete, Search, ShoppingBag } from "react-feather";

const icons = {
  search: Search,
  local_grocery_store: ShoppingBag,
  delete: Delete,
  airplay: Airplay,
  book: Book,
};

function Icon({ id, size = 15, ...delegated }) {
  const Component = icons[id];
  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }
  return (
    <div
      style={{
        width: size + "px",
        height: size + "px",
      }}
      className="icon-wrapper"
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </div>
  );
}

export default Icon;
