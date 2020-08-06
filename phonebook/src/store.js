import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import reducers from "./reducers/reducers";

const itemsReducer = combineReducers({
  items: reducers.items,
  filter: reducers.filter,
});

const store = configureStore({
  reducer: { contacts: itemsReducer },
});

export default store;

// import { combineReducers, createStore } from "redux";
// import reducers from "./reducers/reducers";

// const itemsReducer = combineReducers({
//   items: reducers.items,
//   filter: reducers.filter,
// });

// const rootReducer = combineReducers({
//   contacts: itemsReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;
