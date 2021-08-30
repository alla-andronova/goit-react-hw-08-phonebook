import { useSelector } from "react-redux";
import { getLogIn } from "../../redux/selector/selectors";

import Navigation from "../navigation/Navigation";
import AuthNav from "../authNav/AuthNav";
import UserMenu from "../userMenu/UserMenu";

function AppBar() {
  const isLoggedIn = useSelector(getLogIn);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#858f9a",
        padding: "10px",
      }}
    >
      <div>
        <Navigation />
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
}

export default AppBar;
