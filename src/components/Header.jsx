import Logo from "./Logo";
import { ReactComponent as Arrow } from "../static/images/logout.svg";
import "./Header.css";

const Header = (props) => {
  return (
    <section className="flex justify-between items-center my-10">
      <Logo color="black" />
      <nav className="">
        <ul className="flex list-none items-center">
          <li className="welcome-text">
            Bem vindo, <strong>Giovan</strong>
          </li>
          <li className="ml-3">
            <button className="btn-logout flex justify-center items-center">
              <Arrow />
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
