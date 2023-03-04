// https://stackoverflow.com/a/32108184
export const isEmptyObject = (obj) => {
  return(
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
};