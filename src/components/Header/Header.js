import Logo from "./Logo";
import CartIcon from "./CartIcon";
import SearchForm from "./SearchForm";
import LogIn from "./LogIn";
import SignUpIcon from "./SignUpIcon";
//
import styles from "./Header.module.css";
//
const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.search}>
        <SearchForm />
      </div>
      <div className={styles.naveg}>
        <nav>
          <ul>
            <li>
              <CartIcon onClick={props.onClickCartIcon} />
            </li>
            <li>
              <LogIn onClick={props.onClickLogInIcon} />
            </li>
            <li>
              <SignUpIcon />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
