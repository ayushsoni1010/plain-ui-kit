import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsMap from "./pages/ComponentsMap";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComponentsMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}