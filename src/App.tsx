import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import PhotoDetail from "./components/PhotoDetail/PhotoDetail";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/:id" element={<PhotoDetail />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
