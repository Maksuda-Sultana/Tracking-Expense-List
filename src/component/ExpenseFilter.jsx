/* eslint-disable react/prop-types */
function ExpenseFilter({ onSelectCategory }) {
  const categories = ["Utility", "Groceries", "Tour"];

  return (
    <>
      <select
        className="select select-secondary w-full max-w-xs my-3"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">Show All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}{" "}
          </option>
        ))}
      </select>
    </>
  );
}

export default ExpenseFilter;
