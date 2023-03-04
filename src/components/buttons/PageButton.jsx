const PageButton = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={[
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-neutral-900 text-sm font-medium text-gray-500 hover:bg-gray-50",
        className
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};
export default PageButton;