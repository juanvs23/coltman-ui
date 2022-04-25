import { useState } from "react";

import Buttons from "./pages/buttons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContext } from "./context/context";
import { useEffect } from "react";
import Colors from "./pages/colors";
import Grid from "./pages/grid";
import Typography from "./pages/typography";
import Inputs from "./pages/inputs";
import Spaces from "./pages/spaces";

function App() {
  const [darkmode, setDarkmode] = useState<boolean>(false);
  const [open, setopen] = useState<boolean>(true);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkmode(true);
    }
  }, []);

  return (
    <MainContext.Provider
      value={{ darkmode: { darkmode, setDarkmode }, open: { open, setopen } }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Buttons />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/spaces" element={<Spaces />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
