import { Controller, useForm, useFieldArray } from "react-hook-form";

import { AddButton, RemoveButton } from "@/components/buttons/Button";

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
      <input id="name" type="text" placeholder="Name" {...register("name", { required: true })} className="modalFields p-2" />
      <label htmlFor="type">Type*</label>
      <select id="type" {...register("type", { required: true })} className="modalFields">
        <option value="http">HTTP/S</option>
      </select>
      <label htmlFor="url">URL*</label>
      <input id="url" type="text" placeholder="URL" {...register("url", { required: true })} className="modalFields p-2" />
      <label htmlFor="headers">Headers</label>
      <div id="headers" className="flex flex-col space-y-2">
        {fields.map((item, index) => (
          <div key={item.id} className="flex flex-row space-x-2">
            <input type="text" placeholder="Key" {...register(`headers.${index}.key`)} className="modalFields p-2" />
            <Controller
              render={({ field }) => <input type="text" placeholder="Value" {...field} className="modalFields p-2" />}
              name={`headers.${index}.value`}
              control={control}
            />
            <RemoveButton onClick={() => remove(index)} className="w-12" />
          </div>
        ))}
        <AddButton
          onClick={() => append({ key: "", value: "" })}
          className="w-12 bg-green-600 hover:bg-green-700"
        >
          +
        </AddButton>
      </div>
      <div className="h-4" />
      <button type="submit" className="modalButtons">
        Save
      </button>
    </form>
  );
};
export default ConnectionModal;