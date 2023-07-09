import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Movies from "./Movies";
import MovieDetail from "./MovieDetail";
import CoinTracker from "./CoinTracker";
import Todo from "./Todo";
import Practice from "./Practice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
        <Route path="/cointracker" element={<CoinTracker />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
