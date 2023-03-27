import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutDragDrop from "./components/layout/LayoutDragDrop/LayoutDragDrop";
import { routes } from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDragDrop />} >
            {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
