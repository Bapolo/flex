import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import FormCadastroPassageiro from "./pages/FormCadastroPassageiro"
import FormCadastroMotorista from "./pages/FormCadastroMotorista"

function App() {
  return (
    <div className="App container pt-4 pb-4 h-100 d-flex justify-content-center align-items-center">
      <BrowserRouter>
        <Routes>
          {/* {<Route path = '/' element = { <Home /> } />} */}
          <Route path = '/' element = { <Cadastro /> } />
          <Route path = '/cadastrarpassageiro' element = { <FormCadastroPassageiro /> } />
          <Route path = '/cadastrarmotorista' element = { <FormCadastroMotorista /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
