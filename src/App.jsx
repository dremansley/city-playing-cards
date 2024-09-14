import './App.css'
import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import Homepage from "./Components/Homepage.jsx";
import {CircularProgress} from "@mui/material";

function App() {

  return (
          <Suspense fallback={<div className="flex items-center justify-center h-screen"><CircularProgress /></div>}>
              <Routes>
                  <Route path="/" element={<Homepage />} />
              </Routes>
          </Suspense>
  )
}

export default App
