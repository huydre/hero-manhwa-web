import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {

  return (
   <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to='/'> 
        <h1>Hero Manhwa</h1>
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh - 73px)]">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </main>
   </BrowserRouter>
  )
}

export default App
