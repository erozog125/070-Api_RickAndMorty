import { BrowserRouter,Routes,Route } from "react-router-dom";
import { GetCharacters } from "./components/Pages/GetCharacters/GetCharacters";
import { GetEveryBody } from "./components/Pages/GetEveryBody/GetEveryBody";
import { Home } from "./components/Pages/Home/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcharacters" element={<GetEveryBody />} />
          <Route path="/customcharacters" element={<GetCharacters />} />
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
