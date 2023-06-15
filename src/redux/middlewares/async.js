export default ({ dispatch }) =>
  (next) =>
  (action) => {
    //check to see if the action
    //has a promise on its 'payload' property
    //if it does, then wait for it to resplve
    ///if it doesn't, then send the action on to the
    //next middleware

    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    //we want to wait for the promies to resolve
    //(get its data!!) and then craete a new action
    //with that data and dispatch
    action.payload.then((response) => {
      dispatch({ ...action, payload: response.data });
    });
  };
