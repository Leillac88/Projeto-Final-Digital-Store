import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import cartIcon from "../../assets/cart-icon.svg";
import Search from "../../assets/Search.svg";
import { Logo } from "../Logo/Logo.jsx";
import { NavBar } from "../Navbar/Navbar";
import { CartModal } from "../CartModal/CartModal";
import { supabase } from "../../services/supabaseClient.js";

export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCartModal, setShowCartModal] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleCartModal = () => setShowCartModal(!showCartModal);
  const toggleMenu = () => setMenuAberto(!menuAberto);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        const { data: usuarioData } = await supabase
          .from("usuarios")
          .select("nome")
          .eq("id", user.id)
          .single();

        if (usuarioData?.nome) {
          const primeiroNome = usuarioData.nome.split(" ")[0];
          setUser(primeiroNome);
        } else {
          setUser("Usuário");
        }
      }
    }

    fetchUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/login");
  }

  return (
    <header>
      <div className="heading">
        <Logo />
        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/buscar?q=${encodeURIComponent(searchTerm)}`);
              }
            }}
          />

          <img className="search-icon" src={Search} alt="Ícone de pesquisa" />
        </div>
        <div>
          {!user ? (
            <>
              <Link to="/register" className="register">Cadastre-se</Link>
              <Link to="/login" className="enter">Entrar</Link>
            </>
          ) : (
            <>
              <div className="user-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="#C92071"
                  viewBox="0 0 24 24"
                  style={{ marginRight: "-8px" }}
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4H21.6v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <span className="loggedInUser">Olá, <strong>{user}</strong></span>
              </div>

              <button onClick={handleLogout} className="logOut">Sair</button>
            </>
          )}
          <img
            className="cart"
            src={cartIcon}
            alt="Carrinho de Compras"
            style={{ cursor: "pointer" }}
            onClick={toggleCartModal}
          />

          <button
            className={`menu-toggle ${menuAberto ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu de navegação"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <NavBar menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
      <CartModal show={showCartModal} onClose={toggleCartModal} />
    </header>
  );
}