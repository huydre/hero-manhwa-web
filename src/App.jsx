import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
