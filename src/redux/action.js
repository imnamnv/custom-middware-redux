import axios from "axios";
import { fetchStudentList, setLoading } from "./studentSlice";

export function fetchStudent() {
  const response = axios.get("https://jsonplaceholder.typicode.com/users");

  return {
    type: fetchStudentList.type,
    payload: response,
  };
}

export function setLoadingAction(status) {
  return {
    type: setLoading.type,
    payload: status,
  };
}
