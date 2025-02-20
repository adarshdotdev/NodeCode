import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import DynamicPage from "./pages/DynamicPage";
function App() {
  return (
    <div className=" relative  min-h-screen w-full">
      <div className="   w-full  absolute top-0 h-[70vh]  bg-[url('/Hero-Background-notecode.svg')] bg-no-repeat bg-cover bg-center md:bg-top ">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:id" element={<DynamicPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
