import "./ProductPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WhiteSneaker from '../../../public/tenis1.png';
import BlueSneaker from '../../../public/tenis2.png';
import LemonSneaker from '../../../public/tenis3.png';
import BlackPuma from '../../../public/tenis4.png';
import RedNike from '../../../public/tenis5.png';
import NikePurple from '../../../public/tenis16.png';
import Balenci1 from '../../../public/tenis7.png';
import Adidas1 from '../../../public/tenis8.png';
import NikeYellow from '../../../public/tenis9.png';
import special from '../../../public/tenis10.png';
import NikeAir from '../../../public/tenis11.png';
import NikeGreen from '../../../public/tenis12.png';
import AdidasPink from '../../../public/tenis13.png';
import AdidasSamba from '../../../public/tenis14.png';
import AdidasCor from '../../../public/tenis15.png';

const AllProducts = [
  {
    nome: "Tênis Nike",
    descricao: "Nike Air Force 1",
    preco: "R$ 799,99",
    desconto: "R$ 559,99",
    descPorc: "30% OFF",
    image: WhiteSneaker,
    marca: "Nike",
    categoria: "Casual",
    genero: "Unissex",
  },
  {
    nome: "Tênis Nike",
    descricao: "Air Jordan 1 Retro High",
    preco: "R$ 749,90",
    desconto: "R$ 524,93",
    descPorc: "30% OFF",
    image: BlueSneaker,
    marca: "Nike",
    categoria: "Esporte e lazer",
    genero: "Masculino",
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike Airmax",
    preco: "R$ 600,00",
    desconto: "R$ 420,00",
    descPorc: "30% OFF",
    image: LemonSneaker,
    marca: "Nike",
    categoria: "Corrida",
    genero: "Masculino",
  },
  {
    nome: "Tênis Puma",
    descricao: "Tênis Puma Roma Basic",
    desconto: "R$ 799,00",
    image: BlackPuma,
    marca: "Puma",
    categoria: "Casual",
    genero: "Unissex",
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike Court Borough Low",
    preco: "R$ 898,53",
    desconto: "R$ 628,97",
    descPorc: "30% OFF",
    image: RedNike,
    marca: "Nike",
    categoria: "Casual",
    genero: "Feminino",
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike X Blue Lock Mikage Reo",
    preco: "R$ 1.299,70",
    desconto: "R$ 909,79",
    descPorc: "30% OFF",
    image: NikePurple,
    marca: "Nike",
    categoria: "Esporte e lazer",
    genero: "Feminino",
  },
  {
    nome: "Tênis Balenciaga",
    descricao: "Tênis Balenciaga Tripe S",
    desconto: "R$ 3.185,00",
    image: Balenci1,
    marca: "Balenciaga",
    categoria: "Utilitário",
    genero: "Masculino",
  },
  {
    nome: "Tênis Adidas",
    descricao: "Adidas Superstar",
    desconto: "R$ 699,99",
    image: Adidas1,
    marca: "Adidas",
    categoria: "Casual",
    genero: "Unissex",
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike Air Force 1 Low",
    preco: "R$ 1.925,52",
    desconto: "R$ 1.347,86",
    descPorc: "30% OFF",
    image: NikeYellow,
    marca: "Nike",
    categoria: "Casual",
    genero: "Masculino",
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike SB Dunk High Premium",
    preco: "R$ 2.258,68",
    desconto: "R$ 1.581,07",
    descPorc: "30% OFF",
    image: special,
    marca: "Nike",
    categoria: "Esporte e lazer",
    genero: "Masculino",
  },
  {
    nome: "Tênis Nike",
    descricao: "Air Jordan 3 Retro Midnight Navy",
    preco: "R$ 1.038,70",
    desconto: "R$ 727,09",
    descPorc: "30% OFF",
    image: NikeAir,
    marca: "Nike",
    categoria: "Esporte e lazer",
    genero: "Masculino",
  },
  {
    nome: "Tênis Nike",
    descricao: "Nike Air Force 1 Volt",
    preco: "R$ 739,99",
    desconto: "R$ 517,99",
    descPorc: "30% OFF",
    image: NikeGreen,
    marca: "Nike",
    categoria: "Casual",
    genero: "Masculino",
  },
  {
    nome: "Tênis Adidas",
    descricao: "Adidas Campus 00s",
    desconto: "R$ 599,90",
    image: AdidasPink,
    marca: "Adidas",
    categoria: "Casual",
    genero: "Feminino",
  },
  {
    nome: "Tênis Adidas",
    descricao: "Adidas Samba Vegan",
    desconto: "R$ 699,90",
    image: AdidasSamba,
    marca: "Adidas",
    categoria: "Casual",
    genero: "Unissex",
  },
  {
    nome: "Tênis Adidas",
    descricao: "Adidas Forum Low Cl x Simpsons",
    desconto: "R$ 819,00",
    image: AdidasCor,
    marca: "Adidas",
    categoria: "Casual",
    genero: "Feminino",
  },
];

const brandList = ["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"];
const categoryList = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
const genderList = ["Masculino", "Feminino", "Unissex"];

export function ProductPage() {
  const [sortOption, setSortOption] = useState("mais-relevantes");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(AllProducts);

  const parsePrice = (price) =>
    price ? parseFloat(price.replace("R$", "").replace(/\./g, "").replace(",", ".")) : 0;

  useEffect(() => {
    let produtos = [...AllProducts];

    if (selectedBrands.length)
      produtos = produtos.filter(p => selectedBrands.includes(p.marca));

    if (selectedCategories.length)
      produtos = produtos.filter(p => selectedCategories.includes(p.categoria));

    if (selectedGenders.length)
      produtos = produtos.filter(p => selectedGenders.includes(p.genero));

    if (sortOption === "menor-preco")
      produtos.sort((a, b) => parsePrice(a.desconto || a.preco) - parsePrice(b.desconto || b.preco));
    else if (sortOption === "maior-preco")
      produtos.sort((a, b) => parsePrice(b.desconto || b.preco) - parsePrice(a.desconto || a.preco));

    setFilteredProducts(produtos);
  }, [sortOption, selectedBrands, selectedCategories, selectedGenders]);

  const toggleItem = (item, list, setList) =>
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);

  return (
    <div className="color-bg">
      <section className="productCard">
        <div className="productOrder">
          <h2>
            Resultados para "Tênis" - <span>{filteredProducts.length} produtos</span>
          </h2>
          <div className="orderBy">
            <span>Ordenar por:</span>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="mais-relevantes">Mais relevantes</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>
        </div>

        <div className="filterContent">
          <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
          </button>

          <aside className={`filter ${showFilters ? "show" : ""}`}>
            <p>Filtrar por</p>
            <hr />
            {[{ title: "Marca", list: brandList, state: selectedBrands, setState: setSelectedBrands },
            { title: "Categoria", list: categoryList, state: selectedCategories, setState: setSelectedCategories },
            { title: "Gênero", list: genderList, state: selectedGenders, setState: setSelectedGenders }
            ].map(({ title, list, state, setState }) => (
              <div key={title}>
                <p>{title}</p>
                <form>
                  {list.map((item, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        value={item}
                        checked={state.includes(item)}
                        onChange={() => toggleItem(item, state, setState)}
                      />
                      <label>{item}</label>
                    </div>
                  ))}
                </form>
              </div>
            ))}
          </aside>

          <div className="pageContent">
            {filteredProducts.map((produto, index) => (
              <Link to="/viewProduct" key={index} className="pageItem">
                <div className="pageImage">
                  <img src={produto.image} alt={produto.nome} />
                  {produto.descPorc && <p className="productDescPercentage">{produto.descPorc}</p>}
                </div>
                <p className="productName">{produto.nome}</p>
                <p className="productCardDescription">{produto.descricao}</p>

                <div className="productPrices">
                  {produto.preco && <p className="productRealPrice">{produto.preco}</p>}
                  <p className="productPriceDiscount">{produto.desconto}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}