import React, { useEffect, useRef } from 'react';
import axios from 'axios';

export default function ChooseCategory({
  categories,
  setCategories,
  setCategory
}) {
  const categoryEl = useRef();

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  return (
    <div>
      <label htmlFor="category">Category</label>
      <select
        id="category"
        ref={categoryEl}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option>Any category</option>
        {categories.map((category) => {
          return (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
