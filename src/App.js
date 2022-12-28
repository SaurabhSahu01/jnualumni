import React, { useState } from "react";
import Header from "./components/Header";
import About from "./pages/About";
function App() {
  const [aboutDropDown, setAboutDropDown] = useState(false);
  return (
    <div>
      <Header></Header>
      <span onClick={() => setAboutDropDown(!aboutDropDown)}>
        <p>About</p>
        {aboutDropDown && (
          <div>
            <ul>
              <li>
                <a href="about">About</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="team">Team</a>
              </li>
            </ul>
          </div>
        )}
      </span>
    </div>
  );
}

export default App;
