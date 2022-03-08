import { Footer } from "../common/Footer/Footer";
import { Navegador } from "../common/Navegador/Navegador";
import './PaginaPrincipal.css';

export function PaginaPrincipal() {
  return (
    <main role="main" className="main-container">
      <Navegador/>
      <Footer/>
    </main>
  )
}