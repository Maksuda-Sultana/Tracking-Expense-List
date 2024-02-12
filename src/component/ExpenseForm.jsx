/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

function ExpenseForm({ addExpense }) {
  const categories = ["Utility", "Groceries", "Tour"];
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submitData = (data) => {
    addExpense(data);
    reset();
  };

  return (
    <>
      <div className="text-3xl mb-4 font-bold">Track Expense</div>

      <form onSubmit={handleSubmit((data) => submitData(data))}>
        {/* description */}
        <input
          type="text"
          placeholder="Description"
          className="input input-bordered w-full max-w-xs"
          {...register("description", { required: true, minLength: 4 })}
        />
        {errors.description?.type === "required" && (
          <p className="text-red-400 px-1 py-2">Field is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-red-400 px-1 py-2">
            Too short! minimum character is upto 5{""}
          </p>
        )}
        <br />
        {/* Amount */}
        <input
          type="number"
          placeholder="$50"
          className="input input-bordered w-full max-w-xs mt-5"
          {...register("amount")}
        />
        <br />
        {/* Choose Category */}
        <select
          className="select select-secondary w-full max-w-xs my-3"
          {...register("category")}
        >
          <option value="">Choose Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}{" "}
            </option>
          ))}
        </select>
        {/* submit */}
        <br /> <br />
        <input
          type="submit"
          value={"Add Expenses"}
          className="btn btn-primary max-w-xs
          w-full "
        />
      </form>
    </>
  );
}

export default ExpenseForm;
