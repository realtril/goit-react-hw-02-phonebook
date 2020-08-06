import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actionTypes from "../constants/constants";

const deleteContact = (state, { payload }) => [
  ...state.filter((contact) => contact.id !== payload),
];

const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actionTypes.ADD]: (state, { payload }) => [...state, payload],
    [actionTypes.DELETE]: deleteContact,
  }
);

const filter = createReducer("", {
  [actionTypes.SEARCH]: (state, { payload }) => (state = payload),
});

// const items = (
//   state = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload];
//     case actionTypes.DELETE:
//       return [...state.filter((contact) => contact.id !== payload)];
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case actionTypes.SEARCH:
//       return payload;
//     default:
//       return state;
//   }
// };

export default { items, filter };
