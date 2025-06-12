import "./SpecialOffer.css";
import { ButtonSee } from "../Buttons/Button";
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import SpecialTenis from "../../../public/SpecialTenis.png";
import bgShoes from "../../../public/bg-shoes.png";

export function SpecialOffer() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="offerContainer">
      <div className="offerImage">
        <img
          src={SpecialTenis}
          alt="Tênis Air Jordan edição de colecionador"
          className="specialTenis"
        />
        <img
          src={bgShoes}
          alt="Fundo decorativo para o tênis Air Jordan"
          className="ornamentBg"
        />
      </div>

      <div className="offerContent">
        <span className="offerTitle">Oferta especial</span>
        <h2>Air Jordan edição de colecionador</h2>
        <p className="offerText">
          Esse é o tênis ideal para quem ama estilo, exclusividade e conforto. O Air Jordan edição de colecionador combina design marcante com performance. Aproveite essa chance única de garantir o seu com desconto exclusivo. Oferta válida por tempo limitado ou enquanto durar o estoque.
        </p>
        <NavLink to="/products">
          <ButtonSee />
        </NavLink>
      </div>
    </div>
  );
}
