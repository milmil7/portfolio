import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, {ThemeProvider} from './App.jsx'
import DarkFS from "./repo/DarkFS.jsx";
import FTT from "./repo/FTT.jsx";
import Track from "./repo/Track.jsx";
import CrowCLI from "./repo/CrowCLI.jsx";
import CrowApp from "./repo/CrowApp.jsx";
import MadByte from "./repo/MadByte.jsx";
import GUIReaper from "./repo/GUIReaper.jsx";
import RocketFings from "./repo/RocketFings.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./App.jsx";
import Resume from "./Resume.jsx";
import AbyssBase from "./repo/AbyssBase.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/ftt" element={<FTT />} />
                  <Route path="/Track" element={<Track />} />
                  <Route path="/darkfs" element={<DarkFS />} />
                  <Route path="/Crow" element={<CrowApp />} />
                  <Route path="/crow-cli" element={<CrowCLI />} />
                  <Route path="/MadByte" element={<MadByte />} />
                  <Route path="/gui-reaper" element={<GUIReaper />} />
                  <Route path="/rocket-fings" element={<RocketFings />} />
                  <Route path="/abyss-base" element={<AbyssBase />} />
                  <Route path="/resume" element={<Resume />} />
              </Routes>
          </Router>
          {/*<FTT />*/}
      </ThemeProvider>
  </StrictMode>,
)
