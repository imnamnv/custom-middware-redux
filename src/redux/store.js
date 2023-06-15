import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice";
import async from "./middlewares/async";
import log from "./middlewares/log";

export const store = configureStore({
  reducer: { student: studentReducer },
  middleware: [log, async],
});
