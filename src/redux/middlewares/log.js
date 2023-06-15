export default () => (next) => (action) => {
  console.log("action", action);
  if (action.payload.length) {
    console.log("We have the array data");
  } else {
    console.log("We don't have the array data");
  }
  next(action);
};
