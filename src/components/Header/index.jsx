import Logo from "components/Common/Logo";
import { ReactComponent as Arrow } from "static/images/logout.svg";

import "./styles.css";

const Header = ({ userName = "Anonymous" }) => {

  return (
    <header className="flex justify-between items-center my-10">
      <Logo color="black" />
      <nav>
        <ul className="flex list-none items-center">
          <li className="welcome-text">
            Bem vindo, <strong>{userName}!</strong>
          </li>
          <li className="ml-3">
            <button
              className="btn-logout flex justify-center items-center"
            >
              <Arrow />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
