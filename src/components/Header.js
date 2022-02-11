import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store/authSlice';

import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logOutHandler = () => {
    dispatch(authActions.logOut());
  };

  const navLinks = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logOutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && navLinks}
    </header>
  );
};

export default Header;
