import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import './Header.scss';

export const Header = ({ user, changeUser }) => (
  <div
    className="header"
  >
    <Link
      to="/"
      className="header__logo-link"
    >
      <img
        src="/images/logo.png"
        className="header__logo"
        alt="Logo"
      />
    </Link>
    <nav
      className="header__nav nav"
    >
      <ul
        className="nav__list nav__list--none"
      >
        <li
          className="nav__item"
        >
          <NavLink
            to="/"
            exact
            className="nav__link nav__link--active"
          >
            Home
          </NavLink>
        </li>

        <li
          className="nav__item"
        >
          <NavLink
            to="/catalog"
            className="nav__link nav__link--active"
          >
            Catalog
          </NavLink>
        </li>

        <li
          className="nav__item"
        >
          <NavLink
            to="/addProduct"
            className="nav__link"
          >
            Add new product
          </NavLink>
        </li>
      </ul>

      <button
        type="button"
        className="nav__button nav__button--active"
      >
        Menu
      </button>

      <select
        value={user}
        onChange={event => changeUser(event.target.value)}
      >
        <option
          value="admin"
        >
          Admin
        </option>

        <option
          value="user"
        >
          user
        </option>
      </select>
    </nav>
  </div>
);

Header.propTypes = {
  user: PropTypes.string.isRequired,
  changeUser: PropTypes.func.isRequired,
};