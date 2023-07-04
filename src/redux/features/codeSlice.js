import { createSlice } from "@reduxjs/toolkit";

export const codeSlice = createSlice({
  name: "code",
  initialState: {
    code: null,
  },
  reducers: {
    setCode: (state, action) => {
      if (!action.payload) {
        state.code = null;
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.accessToken) {
          localStorage.setItem("actkn", action.payload.accessToken);
        }
        state.code = action.payload.user;
      }
    },
  },
});

export const { setCode } = codeSlice.actions;

export default codeSlice.reducer;
