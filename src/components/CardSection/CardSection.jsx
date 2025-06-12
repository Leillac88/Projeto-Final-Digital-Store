import "./CardSection.css";
import { Link } from "react-router-dom";
import { ButtonOffer } from "../Buttons/Button";
import collection1 from "../../../public/collection1.png";
import collection2 from "../../../public/collection2.png";
import collection3 from "../../../public/collection3.png";

const collections = [
  { image: collection1, offer: "15% OFF", title: "Novo Drop Supreme" },
  { image: collection2, offer: "10% OFF", title: "Coleção Adidas" },
  { image: collection3, offer: "20% OFF", title: "Novo Beat Bass" },
];

export function CardSection() {
  return (
    <div className="backgroundColor">
      <section className="cardSectionContainer">
        <div className="titleContainer">Coleções em destaque</div>
        <div className="collectionContainer">
          {collections.map(({ image, offer, title }, i) => (
            <div
              key={i}
              className="collections"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="offer">{offer}</div>
              <h3>{title}</h3>
              <Link to="/products">
                <ButtonOffer />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
