import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import PhotoDetail from "./components/PhotoDetail/PhotoDetail";
import PhotoListing from "./components/PhotoListing/PhotoListing";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<PhotoListing />}></Route>
          <Route path="/:id" element={<PhotoDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
