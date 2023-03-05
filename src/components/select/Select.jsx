import { AddButton } from "@/components/buttons/Button";

const Select = ({ id, label, values, register, onAdd }) => {
  return(
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <div className="flex flex-row space-x-2 mr-1">
        <select
          id={id}
          {...register(id, { required: true })}
          className={[
            "modalFields",
            onAdd ? "w-11/12" : "w-full py-2"
          ].join(" ")}
        >
          {values?.map((value) => (
            <option key={value?.id} value={value?.id}>{value?.name}</option>
          ))}
        </select>
        { onAdd && <AddButton onClick={onAdd} /> }
      </div>
    </>
  );
};
export default Select;