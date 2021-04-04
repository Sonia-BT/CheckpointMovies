import "./App.css";
import Principal from "./Components/Principal";
import Details from "./Components/Details";
import NavBar from "./Components/NavBar.js";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Principal></Principal>
      <Details></Details>
    </div>
  );
}

export default App;
