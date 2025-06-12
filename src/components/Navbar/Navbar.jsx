import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Produtos" },
  { path: "/categorias", label: "Categorias" },
  { path: "/pedidos", label: "Meus Pedidos" },
];

export function NavBar({ menuAberto }) {
  const { pathname } = useLocation();

  const isActive = (path) =>
    path === "/"
      ? pathname === "/"
      : pathname.startsWith(path);

  return (
    <nav className={`navbar ${menuAberto ? "aberto" : ""}`}>
      <ul>
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className={isActive(path) ? "active" : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
