import actionTypes from "../constants/constants";
import uuid from "react-uuid";
import { createAction } from "@reduxjs/toolkit";

// const onSearch = (e) => ({
//   type: actionTypes.SEARCH,
//   payload: e.target.value,
// });

// const onAdd = (personData) => ({
//   type: actionTypes.ADD,
//   payload: { ...personData, id: uuid() },
// });

// const onDelete = (e) => {
//   const id = e.target.id;
//   return {
//     type: actionTypes.DELETE,
//     payload: id,
//   };
// };

// export default {
//   onDelete,
//   onAdd,
//   onSearch,
// };

const onAdd = createAction(actionTypes.ADD, (personData) => ({
  payload: { ...personData, id: uuid() },
}));
const onSearch = createAction(actionTypes.SEARCH, (e) => ({
  payload: e.target.value,
}));

const onDelete = createAction(actionTypes.DELETE, (e) => ({
  payload: e.target.id,
}));

export default {
  onDelete,
  onAdd,
  onSearch,
};
