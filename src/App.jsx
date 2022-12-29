import {useEffect, useState} from "react";
import Search from "./tools/components/search/search.jsx";
import Header from "./tools/components/header/header.jsx";
import DataGrid from "./tools/components/data-grid/data-grid.jsx";
import ScrollToTop from "./tools/components/to-top/ScrollToTop";

function App() {

  return (
    <main>
      <Header/>
      <Search/>
      <DataGrid/>
      <ScrollToTop/>
    </main>
  );
}

export default App
