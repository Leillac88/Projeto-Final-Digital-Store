import "./Footer.css";
import LogoFooter from "../../assets/logo-footer.svg";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";

export function Footer() {
  return (
    <footer>
      <div className="infoContainer">
        <div className="logoContainer">
          <img className="logoFooter" src={LogoFooter} alt="logo" />
        </div>
        <div className="textContainer">
          Estilo, inovação e praticidade. A Digital Store conecta você aos produtos mais atuais com qualidade e atendimento de confiança.
        </div>
        <div className="socialIcons">
          <a href="https://www.facebook.com/digitalcollegebr" target="_blank"><img src={FacebookIcon} alt="facebook" /></a>
          <a href="https://www.instagram.com/digitalcollegebr/" target="_blank"><img src={InstagramIcon} alt="instagram" /></a>
          <a href="https://x.com/eaicollegers" target="_blank"><img src={TwitterIcon} alt="twitter" /></a>
        </div>
      </div>

      <div className="columnsContainer">
        <div className="columnContent">
          <div className="contentList">
            <div className="contentTitle"><span>Informação</span></div>
            <a href="#sobre-drip-store">Sobre Drip Store</a>
            <a href="#seguranca">Segurança</a>
            <a href="#wishlist">Wishlist</a>
            <a href="#blog">Blog</a>
            <a href="#trabalhe-conosco">Trabalhe Conosco</a>
            <a href="#meus-pedidos">Meus Pedidos</a>
          </div>
        </div>

        <div className="columnContent">
          <div className="contentList">
            <div className="contentTitle"><span>Categorias</span></div>
            <a href="#camisetas">Camisetas</a>
            <a href="#calcas">Calças</a>
            <a href="#bones">Bonés</a>
            <a href="#headphones">Headphones</a>
            <a href="#tenis">Tênis</a>
          </div>
        </div>

        <div className="columnContent">
          <div className="contentList">
            <div className="contentTitle"><span>Contato</span></div>
            <a href="#">Av. Santos Dumont, 1510 - 1</a>
            <a href="#">andar - Aldeota, Fortaleza -</a>
            <a href="#">CE, 60150-161.</a>
            <a href="#">(85) 3051-3411</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="FooterCopy">
        <span>@ 2025 Digital College</span>
      </div>
    </footer>
  );
}
