import "./App.css";
import { ParentEx1 } from "./components/Example1";
import { ParentEx2 } from "./components/Example2";
// import { UserContextProvider } from "./components/UserContext";
import {Parent} from "./components/Example3";
import { ThemeContextProvider } from "./components/ThemeContextProvider";

function App() {
  return <ThemeContextProvider><Parent /> <ParentEx1 /> <ParentEx2 /> </ThemeContextProvider>;
}

export default App;
