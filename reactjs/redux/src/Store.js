import { legacy_createStore as createStore } from "redux";

const initialState = {
  count: 10,
};
const reducer = (prevState = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case "decrement":
        return {...prevState,count:prevState.count-1}
      break;
    case "increment": 
        return {...prevState, count:prevState.count+1}
      break;
  }
  return prevState;
};
const store = createStore(reducer);
export default store;
