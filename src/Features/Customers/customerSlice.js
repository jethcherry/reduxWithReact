import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare: function (fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updatedName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updatedName } = customerSlice.actions;
export default customerSlice.reducer;

// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "account/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// export function updateName(fullName) {
//   return { type: "account/updateName", payload: fullName };
// }
