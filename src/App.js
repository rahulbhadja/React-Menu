import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allcaegories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setManuItems] = useState(items);
  const [categories, setCategories] = useState(allcaegories);

  const filterItems = (category) => {
    if (category === "All") {
      setManuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setManuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
