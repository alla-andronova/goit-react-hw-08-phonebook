import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLogIn } from "../../redux/selector/selectors";

// const styles = {
//   link: {
//     display: "inline-block",
//     textDecoration: "none",
//     padding: 12,
//     fontWeight: 700,
//     color: "#2A363B",
//   },
//   activeLink: {
//     color: "#3445c2",
//   },
// };

function Navigation() {
  const isLoggedIn = useSelector(getLogIn);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        //   tyle={styles.link} activeStyle={styles.activeLink}
      >
        Главная
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          //   style={styles.link}
          //   activeStyle={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
