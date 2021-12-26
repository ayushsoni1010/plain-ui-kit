import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Input from "./components/Input"
import Landing from "./pages/Landing"

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  )
}