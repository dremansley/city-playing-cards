import './App.css'
import Header from "./Components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Homepage from "./Components/Homepage.jsx";
import Map from "./Components/Map.jsx";
import {CircularProgress} from "@mui/material";

function App() {

  return (
          <Suspense fallback={<div className="flex items-center justify-center h-screen"><CircularProgress /></div>}>
              <Header />
              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/map" element={<Map />} />
              </Routes>
          </Suspense>
  )
}

export default App
