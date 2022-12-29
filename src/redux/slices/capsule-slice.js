import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  capsules: [],
  statuses: [],
  original_launch: [],
  type: [],
  loading: false,
}

const capsuleSlice = createSlice({
  name: "capsules",
  initialState,
  reducers: {

  },
  extraReducers: {

  },
});

export const {} = capsuleSlice.actions;
export default capsuleSlice.reducer;