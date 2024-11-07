import { Route, Routes } from "react-router-dom"
import { Home, About } from "./page"

const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />}></Route>
   </Routes>
   </>
  )
}

export default App;