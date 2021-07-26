import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Journey from "./components/Journey"
import Team from "./components/Team"
import Store from "./components/Store"
import Contact from "./components/Contact"
import CssBaseline from "@material-ui/core/CssBaseline"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const newtheme = createTheme({
  palette: {
    black: {
      light: "#000",
    },
  },
  black: {
    light: "#000",
  },
})
function App() {
  return (
    <ThemeProvider theme={newtheme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/journey" exact>
          <Journey />
        </Route>
        <Route path="/team" exact>
          <Team />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
