import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI

  let [searchParams, setSearchParams] = useSearchParams();
  let [category, setCategory] = useState(searchParams.getAll("category") || []);

  const handleFilter = (e) => {
    let option = e.target.value;

    let newCategory = [...category];
    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    let params = {};
    category && (params.category = category);

    setSearchParams(params);
  }, [category, setSearchParams]);

  return (
    <div style={{ flex: 2, border: "3px solid black", borderRadius: 11 }}>
      <h3>Filters</h3>
      <div>Category</div>
      <div>
        <div>
          <input
            type="checkbox"
            value="Sneakers"
            defaultChecked={category.includes("Sneakers")}
            onChange={handleFilter}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Loafers"
            defaultChecked={category.includes("Loafers")}
            onChange={handleFilter}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Canvas"
            defaultChecked={category.includes("Canvas")}
            onChange={handleFilter}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Boots"
            defaultChecked={category.includes("Boots")}
            onChange={handleFilter}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
