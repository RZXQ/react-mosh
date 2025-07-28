import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ExpenseForm() {
  const schema = z.object({
    description: z
      .string()
      .min(3, { error: "Description should be at least 3 characters." }),
    amount: z.number({ error: "Amount is required." }),
    category: z
      .string({ error: "Category is required." })
      .min(1, { error: "Category is required." }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <div className="mb-2">
          <label htmlFor="description">Description</label>
        </div>
        <input
          {...register("description")}
          className="input"
          type="text"
          id="description"
        />
        {errors.description && (
          <div className="text-error">{errors.description.message}</div>
        )}
      </div>

      <div className="mb-5">
        <div className="mb-2">
          <label htmlFor="Amount">Amount</label>
        </div>
        <input
          {...register("amount")}
          className="input"
          type="number"
          id="Amount"
        />
        {errors.amount && (
          <div className="text-error">{errors.amount.message}</div>
        )}
      </div>

      <div className="mb-5">
        <div className="mb-2">
          <label htmlFor="category">Category</label>
        </div>
        <select {...register("category")} className="input" id="category">
          <option value="" disabled></option>
          <option value="groceries">Groceries</option>

          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <div className="text-error">{errors.category.message}</div>
        )}
      </div>

      <button className="btn btn-secondary">Submit</button>
    </form>
  );
}
