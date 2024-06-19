import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="about" />
            <Route path="contact" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App