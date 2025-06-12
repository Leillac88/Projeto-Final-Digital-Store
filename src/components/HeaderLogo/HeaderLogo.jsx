import "./HeaderLogo.css";
import { Link } from 'react-router-dom';
import { Logo } from "../Logo/Logo";

export function HeaderLogo() {
  return (
    <header className="headerLogo">
      <div className="headingLogo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
}