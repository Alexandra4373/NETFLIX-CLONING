import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import MyList from "./Components/MyList";
import Originals from "./Components/Originals";
import RecentlyAdded from "./Components/RecentlyAdded";
import TVshows from "./Components/TVshows";

const AppRouters = () => {
  return (
    <div>
      <nav>
        <ol>
          <li>
            <Link to="/Home">Home</Link>
          </li>

          <li>
            <Link to="/Movies">Movies</Link>
          </li>
          <li>
            <Link to="/TVshows">TVshows</Link>
          </li>
          <li>
            <Link to="/Originals">Originals</Link>
          </li>
          <li>
            <Link to="/RecentlyAdded">RecentlyAdded</Link>
          </li>
          <li>
            <Link to="/MyList">MyList</Link>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="/Originals" element={<Originals />} />
        <Route path="/RecentlyAdded" element={<RecentlyAdded />} />
        <Route path="/TVshows" element={<TVshows />} />
      </Routes>
    </div>
  );
};

export default AppRouters;
