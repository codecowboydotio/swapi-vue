export default (callback) => {
  const name = "fooble";
  setTimeout(() => {
    callback(null, name);
  }, 500);
};
