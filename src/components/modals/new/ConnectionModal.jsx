import { createRef } from "react";

import { Controller, useForm, useFieldArray } from "react-hook-form";

const ConnectionModal = ({ onSubmit }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: "headers" });
  if (errors) {
    console.error(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4"
    >
      <label htmlFor="name">Name*</label>
      <input id="name" type="text" placeholder="Name" {...register("name", { required: true })} />
      <label htmlFor="type">Type*</label>
      <select id="type" {...register("Type", { required: true })}>
        <option value="http">HTTP/S</option>
      </select>
      <label htmlFor="url">URL*</label>
      <input id="url" type="text" placeholder="URL" {...register("url", { required: true })} />
      <label htmlFor="headers">Headers</label>
      <div id="headers" className="flex flex-col space-y-2">
        {fields.map((item, index) => (
          <div key={item.id} className="flex flex-row space-x-2">
            <input type="text" placeholder="Key" {...register(`headers.${index}.key`)} />
            <Controller
              render={({ field }) => <input type="text" placeholder="Value" {...field} />}
              name={`headers.${index}.value`}
              control={control}
            />
            <button type="button" onClick={() => remove(index)}>-</button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ key: "", value: "" })}
        >
          +
        </button>
      </div>
      <input type="submit" />
    </form>
  );
};
export default ConnectionModal;