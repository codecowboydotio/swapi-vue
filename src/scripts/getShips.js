export default (callback) => {
  let API_URI = "http://10.1.1.140/people";
  setTimeout(() => {
    callback(null, API_URI);
  }, 3000);
};
