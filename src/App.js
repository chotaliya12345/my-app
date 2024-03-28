import "./App.css";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./user/container/Counter/Counter";
import EmployeeForm from "./user/container/EmployeeForm/EmployeeForm";
import Exam1 from "./user/container/Exam1";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      {/* <Exam1 /> */}
      {/* <EmployeeForm /> */}
      <Counter />
    </Provider>
  );
}

export default App;
