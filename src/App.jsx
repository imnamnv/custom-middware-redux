import { useDispatch } from "react-redux";
import "./App.css";
import { fetchStudent } from "./redux/action";

function App() {
  const dispath = useDispatch();
  return (
    <>
      Hello Middware
      <br />
      <button
        onClick={() => {
          dispath(fetchStudent());
        }}
      >
        Fetch data
      </button>
    </>
  );
}

export default App;
