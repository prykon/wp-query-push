import { forwardRef, useState } from "react";

import AddButton from "@/components/buttons/AddButton";

const TextField = ({ id, value, onChange }) => {
  const handleChange = (event) => {
    onChange(id, event.target.value);
  };
  return (
    <input type="text" value={value} onChange={handleChange} className="swal2-input" />
  );
};

const TextInputList = forwardRef((props, ref) => {

  const [fields, setFields] = useState([{ id: 0, value: '' }]);
  const [nextId, setNextId] = useState(1);

  const addField = () => {
    setFields([...fields, { id: nextId, value: '' }]);
    setNextId(nextId + 1);
  };

  const updateField = (id, value) => {
    const newFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    ref.current = newFields;
    setFields(newFields);
  };

  return (
    <div className="flex flex-col space-y-4">
      {fields.map((field) => (
        <TextField
          key={field.id}
          id={field.id}
          value={field.value}
          onChange={updateField}
        />
      ))}
      <AddButton onClick={addField} />
    </div>
  );
});
export default TextInputList;