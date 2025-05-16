import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./page/home"
import { Depense } from "./page/depense"
import { Achat } from "./page/achat"
import { Faire } from "./page/faire"
import { DepensesProvider } from "./context/DepensesContext";
import Layout from "./layout"
import { AchatProvider } from "./context/AchatContext"
import { FaireProvider } from "./context/FaireContext"
import { CommandeProvider } from "./context/commandecontext"
import { Commande } from "./page/commande";




function App() {
  return (
    <CommandeProvider>
    <FaireProvider>
    <AchatProvider>
    <DepensesProvider>
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/depense" element={<Depense />} />
          <Route path="/achat" element={<Achat />} />
          <Route path="/faire" element={<Faire />} />
          <Route path="/commande" element={<Commande />} />
        </Route>
      </Routes>
    </Router>
    </DepensesProvider>
    </AchatProvider>
    </FaireProvider>
    </CommandeProvider>
  )
}

export default App
