const PageButton = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={[
        "relative inline-flex items-center px-2 py-2 buttons",
        className
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};
export default PageButton;