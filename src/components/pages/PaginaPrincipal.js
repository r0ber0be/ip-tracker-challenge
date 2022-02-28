import { Footer } from "../common/Footer/Footer";
import { Navegador } from "../common/Navegador/Navegador";
import './PaginaPrincipal.css';

export function PaginaPrincipal() {
  return (
    <div className="main-container">
      <Navegador/>
      <Footer/>
    </div>
  )
}