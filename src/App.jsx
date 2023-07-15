import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  return (
   <BrowserRouter>

    <Header/>

    <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh - 73px)]">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>

    <Footer/>
   </BrowserRouter>
  )
}

export default App
