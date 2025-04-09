import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import FormCadastroPassageiro from "./pages/FormCadastroPassageiro"
import FormCadastroMotorista from "./pages/FormCadastroMotorista"
import Login from "./pages/Login";

function App() {
  return (
    <div className="App container-md p-3 h-100 fs-3 d-flex flex-column justify-content-center align-items-center ">
      <HashRouter>
        <Routes>
          {<Route path = '/home' element = { <Home /> } />} 
          <Route path = '/' element = { <Cadastro /> } />
          <Route path = '/cadastrarpassageiro' element = { <FormCadastroPassageiro /> } />
          <Route path = '/cadastrarmotorista' element = { <FormCadastroMotorista /> } />
          <Route path = "/login" element = { <Login /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
