import Routes from "./components/Routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
