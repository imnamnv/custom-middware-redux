import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: [],
  loading: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    fetchStudentList: (state, action) => {
      state.studentList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { fetchStudentList, setLoading } = studentSlice.actions;

export default studentSlice.reducer;
