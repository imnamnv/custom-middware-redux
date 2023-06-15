import axios from "axios";
import { fetchStudentList } from "./studentSlice";

export function fetchStudent() {
  const response = axios.get("https://jsonplaceholder.typicode.com/users");

  return {
    type: fetchStudentList.type,
    payload: response,
  };
}
