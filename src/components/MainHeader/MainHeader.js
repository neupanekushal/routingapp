import styles from "./MainHeader.module.css";
import { Link, NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/welcome"
              className={(activeLink) =>
                activeLink.isActive ? styles.active : ""
              }
            >
              welcome
            </NavLink>
            {/*<Link to="/welcome">Welcome</Link>*/}
            {/*<a href="/welcome"> Welcome</a>*/}
          </li>
          <li>
            <NavLink
              to="/products"
              className={(activeLink) =>
                activeLink.isActive ? styles.active : ""
              }
            >
              Products
            </NavLink>
            {/* <Link to="/products">Products</Link>*/}
            {/*<a href="/products"> Products</a>*/}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
