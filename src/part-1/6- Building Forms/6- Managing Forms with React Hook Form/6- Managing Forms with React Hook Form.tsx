import { FieldValues, useForm } from "react-hook-form";

export default function Form() {
  // Initialize useForm and get register and handleSubmit functions
  const { register, handleSubmit } = useForm();

  // Callback to handle form submission. Receives form data.
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="input">
          <span>Name</span>
          <input
            // Registers this input field for "name" in the form state
            {...register("name")}
            type="text"
            id="name"
            className="input"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="input">
          <span>Age</span>
          <input
            // Registers this input field for "age" in the form state
            {...register("age")}
            type="number"
            id="age"
            className="input"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
