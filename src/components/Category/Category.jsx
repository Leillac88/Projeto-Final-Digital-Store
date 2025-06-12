import { Link } from "react-router-dom";
import Camiseta from "../../assets/tshirt.svg";
import Calca from "../../assets/pants.svg";
import Bone from "../../assets/bone-icon.svg";
import Headphone from "../../assets/headphones.svg";
import Tenis from "../../assets/sneakers.svg";

import "./Category.css";

const categories = [
  { label: "Camisetas", image: Camiseta, alt: "Camiseta" },
  { label: "Calças", image: Calca, alt: "Calça" },
  { label: "Bonés", image: Bone, alt: "Boné" },
  { label: "Headphones", image: Headphone, alt: "Headphone" },
  { label: "Tênis", image: Tenis, alt: "Tênis" },
];

export function Category() {
  return (
    <div className="color-bg">
      <section className="color">
        <h2>Coleções em destaque</h2>
        <div className="main">
          {categories.map(({ label, image, alt }) => (
            <div className="icons" key={label}>
              <picture>
                <Link to="/products">
                  <img src={image} alt={alt} />
                </Link>
              </picture>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Category;
