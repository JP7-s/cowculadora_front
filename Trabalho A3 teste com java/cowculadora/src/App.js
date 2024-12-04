import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MenuInicial from "./MenuInicial";
import RegistroAnimal from "./RegistroAnimal";
import Historico from "./Historico";
import HistoricoMedicamentos from "./HistoricoMedicamentos";
import EstoqueMedicamentos from "./EstoqueMedicamentos";
import Calculadora from "./Calculadora";
import Login from "./Login";
import RegistroTratamento from "./RegistroTratamento";
import BalancoVendas from "./BalancoVendas";
import RelatorioLotes from "./RelatorioLotes";
import LoteDetalhes from "./LoteDetalhes";
import BulaMedicamento from "./BulaMedicamento"; 

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isAuthenticated");
    if (loggedIn) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rota para o login */}
          <Route
            path="/login"
            element={<Login setAuthenticated={handleLogin} />}
          />
          {/* Rotas protegidas (Menu e páginas internas) */}
          {isAuthenticated ? (
            <>
              <Route
                path="/"
                element={<MenuInicial onLogout={handleLogout} />}
              />
              <Route
                path="/registro-animal"
                element={<RegistroAnimal />} // RegistroAnimal redireciona internamente ao Historico.js
              />
              <Route path="/historico" element={<Historico />} />
              <Route
                path="/historico-medicamentos"
                element={<HistoricoMedicamentos />}
              />
              <Route
                path="/estoque-medicamentos"
                element={<EstoqueMedicamentos />}
              />
              <Route path="/calculadora" element={<Calculadora />} />
              <Route
                path="/registro-tratamento"
                element={<RegistroTratamento />}
              />
              <Route path="/balanco-vendas" element={<BalancoVendas />} />
              <Route path="/relatorio-lotes" element={<RelatorioLotes />} />
              <Route path="/lote-detalhes/:id" element={<LoteDetalhes />} />
              <Route path="/bula/:nome" element={<BulaMedicamento />} />
            </>
          ) : (
            // Redireciona para o login se o usuário não estiver autenticado
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
