import { useState } from "react";

import NavBarComponent from "./components/NavBarComponent/NavBarComponent";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBarComponent />
    </div>
  );
}

export default App;
