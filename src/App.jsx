import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routers/Routers";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Routers />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
