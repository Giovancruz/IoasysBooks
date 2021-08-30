import axios from "axios";
import { useAppContext } from "components/Common/context";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

async function SignIn(credentials) {
  const { userHasAuthenticated } = useAppContext();

  return await api
    .post("/auth/sign-in", credentials)
    .then((response) => {
      const token = response.headers.authorization;

      localStorage.setItem("user", response.data.name);
      localStorage.setItem("token", token);
      localStorage.setItem("refresh-token", response.headers["refresh-token"]);

      api.defaults.headers.common = { Authorization: `Bearer ${token}` };

      userHasAuthenticated(true);

      return response;
    })
    .catch((err) => {
      return err;
    });
}

// async function Logout() {
//   const { userHasAuthenticated } = useAppContext();

//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
//   localStorage.removeItem("refresh-token");

//   api.defaults.headers.Authorization = undefined;

//   userHasAuthenticated(false);
// }

export { api, SignIn };
