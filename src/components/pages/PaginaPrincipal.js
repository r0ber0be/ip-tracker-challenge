import { Footer } from "../common/Footer/Footer";
import { LocalInfo } from "../common/LocalInfo/LocalInfo";
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