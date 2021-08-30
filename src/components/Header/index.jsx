import Logo from "components/Common/Logo";
import { ReactComponent as Arrow } from "static/images/logout.svg";
import { useAuthContext } from "contexts/auth";
import "./styles.css";

const Header = () => {
  const { Logout, userData } = useAuthContext();

  async function handleLogout() {
    Logout();
  }

  return (
    <header className="flex justify-between items-center my-10">
      <Logo color="black" />
      <nav>
        <ul className="flex list-none items-center">
          <li className="welcome-text">
            Bem vindo, <strong>{userData.name}!</strong>
          </li>
          <li className="ml-3">
            <button
              className="btn-logout flex justify-center items-center"
              onClick={handleLogout}
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
