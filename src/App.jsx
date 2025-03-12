// import React from 'react'
// import Header from './components/Header/Header'
// import Slider from './components/pages/Slider'
// import Footer from './components/Footer/Footer'
// import Cards from './components/pages/Cards'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Slider/>
//       <Cards/>
//       <Footer/>
//     </div>
//   )
// }

// export default App



// 2nd try
import React, { useState,useCallback,useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/pages/Cards";
import Header from "./components/Header/Header"
import MovieDetail from "./components/pages/MovieDetail";
import Footer from "./components/Footer/Footer";
import _ from "lodash";

function App() {
  const [search,setSearch]=useState("You")

  // const handleSearchChange =(text)=>{
  //  setSearch(text)
  //  console.log("text in App js: ", text);
  //  }

const handleSearchChange =useCallback(
    _.debounce((text) => {
   setSearch(text); 
   console.log("text in App js: ", text);
   }, 5000), // 500ms delay
   []
 );

// const debouncedSearch = useMemo(() => _.debounce((text) => {
//   setSearch(text);
//   console.log("text in App.js: ", text);
// }, 500), []); // Ensures debounce function is created only once

// const handleSearchChange = useCallback((text) => {
//   debouncedSearch(text);
// }, [debouncedSearch]);

  return (
<div>
  <Header onSearchChange={handleSearchChange} />
    <Router>
         
      <Routes>
        <Route path="/" element={<Cards  searchQuery={search} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
