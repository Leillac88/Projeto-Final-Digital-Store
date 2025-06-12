import "./ProductCard.css";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/right-arrow.svg";
import Adidas from "../../../public/tenis8.png";
import WhiteSneaker from '../../../public/tenis1.png';
import BlueSneaker from '../../../public/tenis2.png';
import LemonSneaker from '../../../public/tenis3.png';
import BlackPuma from '../../../public/tenis4.png';
import RedNike from '../../../public/tenis5.png';
import NikePurple from '../../../public/tenis16.png';
import Balenci1 from '../../../public/tenis7.png';

const products = [
  {
    nome: "Tênis Nike",
    descricao: "Nike Air Force 1",
    descPorc: "30% OFF",
    preco: "R$ 799,99",
    desconto: "R$ 559,99",
    image: WhiteSneaker,
  },
  {
    nome: "Tênis Nike",
    descricao: "Air Jordan 1 Retro High",
    descPorc: "30% OFF",
    preco: "R$ 749,90",
    desconto: "R$ 524,93",
    image: BlueSneaker,
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike Airmax",
    descPorc: "30% OFF",
    preco: "R$ 600,00",
    desconto: "R$ 420,00",
    image: LemonSneaker,
  },
  {
    nome: "Tênis Puma",
    descricao: "Tênis Puma Roma Basic",
    desconto: "R$ 799,00",
    image: BlackPuma,
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike Court Borough Low",
    descPorc: "30% OFF",
    preco: "R$ 898,53",
    desconto: "R$ 628,97",
    image: RedNike,
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike X Blue Lock Mikage Reo",
    descPorc: "30% OFF",
    preco: "R$ 1.299,70",
    desconto: "R$ 909,79",
    image: NikePurple,
  },
  {
    nome: "Tênis Balenciaga",
    descricao: "Tênis Balenciaga Tripe S",
    desconto: "R$ 3.185,00",
    image: Balenci1,
  },
  {
    nome: "Tênis Adidas",
    descricao: "Adidas Superstar",
    desconto: "R$ 699,99",
    image: Adidas,
  },
];

export function ProductCard({ quantidadeProdutos = products.length }) {
  const produtosEmAlta = products.slice(0, quantidadeProdutos);

  return (
    <div className="productCard-bg">
      <section className="productCard">
        <div className="cardHeader">
          <h2>Produtos em alta</h2>
          <Link to="/products" className="seeAllLink">
            Ver todos <img src={ArrowRight} alt="Seta para a direita" />
          </Link>
        </div>
        <div className="productCardGrid">
          {produtosEmAlta.map((produto, index) => (
            <div key={index} className="productCardItem">
              <div className="productCardImage">
                <img src={produto.image} alt={produto.nome} />
                {produto.descPorc && (
                  <p className="productCardPercentage">{produto.descPorc}</p>
                )}
              </div>
              <p className="productCardName">{produto.nome}</p>
              <p className="productCardDesc">{produto.descricao}</p>
              <div className="productPrices">
                {produto.preco && (
                  <p className="productCardPrice">{produto.preco}</p>
                )}
                <p className="productCardDiscount">{produto.desconto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
