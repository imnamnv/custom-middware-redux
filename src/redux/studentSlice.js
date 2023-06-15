import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: [],
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    fetchStudentList: (state, action) => {
      state.studentList = action.payload;
    },
  },
});

export const { fetchStudentList } = studentSlice.actions;

export default studentSlice.reducer;
