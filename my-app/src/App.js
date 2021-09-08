import React, { useState } from "react";

import "./App.css";

const axios = {
  post: (url, body) => {
    return Promise.resolve("success");
  },
};

function App() {
  const [value, setValue] = useState("");

  return (
    <div id="container">
      <div className="header">
        <div className="navbar">
          <div className="navbar_logo">
            <a href="#">STUDYCODE</a>
          </div>

          <ul className="navbar_menu">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
            <li>
              <a href="#">JOIN</a>
            </li>
            <li>
              <a href="#">BOARD</a>
            </li>
            <li>
              <a href="#">COMMENT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header1"> header1</div>

      <div className="search_part">
        <form action="" method="" className="box">
          <label>
            <input
              type="text"
              id="input_text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input type="submit" value="검색" id="input_submit" />
          </label>
        </form>
      </div>

      <div className="nav">nav</div>

      <div className="section">section</div>

      <div className="footer">
        <hr />
        <p id="footer1">3조 프로젝트</p>
        <p id="footer2">CAFE TEMPLATE</p>
      </div>
    </div>
  );
}

export default App;
