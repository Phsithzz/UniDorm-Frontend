import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DormDetail from "./pages/DormDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/detail/:id" element={<DormDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
