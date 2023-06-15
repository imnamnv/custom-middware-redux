import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchStudent } from "./redux/action";

function App() {
  const dispath = useDispatch();
  const isLoading = useSelector((state) => {
    return state.student.loading;
  });

  const studentList = useSelector((state) => {
    return state.student.studentList;
  });

  const renderStudentList = () => {
    return studentList.map((student) => {
      return <div key={student.id}>{student.name}</div>;
    });
  };

  return (
    <>
      Hello Middware
      <br />
      {isLoading ? "Loading...." : ""}
      <button
        onClick={() => {
          dispath(fetchStudent());
        }}
      >
        Fetch data
      </button>
      <br />
      Student List:
      <br />
      {!isLoading && renderStudentList()}
    </>
  );
}

export default App;
