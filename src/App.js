import Navbar from "./Component/NavBar/Navbar";
import React from "react";
import './App.css'
import {action,trending,horror, romantic, comedy} from './urls'
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost id={1}  urls={trending}title="Trending"/>
      {/* <RowPost id={2} urls={romantic}title="romantic"isSmall/> */}
      <RowPost id={3} urls={action}title="Actions"isSmall/>
      <RowPost id={4} urls={horror}title="Horror"isSmall/>
      <RowPost id={5} urls={comedy}title="Comedy"isSmall/>
    </div>
  );
}

export default App;
