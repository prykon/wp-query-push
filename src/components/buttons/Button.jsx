export const AddButton = ({ onClick, className }) => (
  <Button
    label="+"
    onClick={onClick}
    className={className}
  />
);

export const RemoveButton = ({ onClick, className }) => (
  <Button
    label="-"
    onClick={onClick}
    className={[
      className ?? '',
      'bg-red-500 hover:bg-red-600',
    ].join(' ')}
  />
);

const Button = ({ label, onClick, className }) => {
  return(
    <button
      type="button"
      onClick={onClick}
      className={[
        "modalButtons",
        className ?? '',
      ].join(' ')}
    >
      {label}
    </button>
  );
};
export default Button;