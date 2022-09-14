/* eslint-disable default-case */
import { useImmerReducer } from "use-immer"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Store from "./components/Store"
import Team from "./components/Team"
import TheJourney from "./components/TheJourney"
import Contact from "./components/Contact"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import ViewItem from "./components/ViewItem"

function App() {
  const init = {
    In: false,
    Cartitemsnum: 0,
    Addtocart: [],
  }
  function MyReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.In = true
        return
      case "logout":
        draft.In = false
        return
      case "cartadd":
        draft.Cartitemsnum += 1
        return
    }
  }

  const [state, dispatch] = useImmerReducer(MyReducer, init)
  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/TheJourney" element={<TheJourney />} />
              <Route exact path="/Team" element={<Team />} />
              <Route exact path="/Store" element={<Store />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/ViewItems" element={<ViewItem />} />
            </Routes>
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default App

