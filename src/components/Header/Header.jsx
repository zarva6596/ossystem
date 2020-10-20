import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';

import { NavLink, Link } from 'react-router-dom';

import './Header.scss';

export const Header = ({ changeUser }) => {
  const [anchorUser, setAnchorUser] = useState(null);
  const [show, showMenu] = useState(false);
  const open = Boolean(anchorUser);

  const handleUserMenu = (event) => {
    setAnchorUser(event.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorUser(null);
  };

  const top = `${show ? '0' : '-100%'}`;

  return (
    <>
      <div
        className="mobile"
        style={{
          top,
        }}
      >
        <ul
          className="mobile__list"
          style={{
            top,
          }}
        >
          <li
            className="mobile__item"
          >
            <NavLink
              to="/"
              exact
              className="mobile__link mobile__link--active"
              onClick={() => showMenu(!show)}
            >
              Home
            </NavLink>
          </li>
          <li
            className="mobile__item"
          >
            <NavLink
              to="/catalog"
              className="mobile__link"
              onClick={() => showMenu(!show)}
            >
              Catalog
            </NavLink>
          </li>
          <li
            className="mobile__item"
          >
            <NavLink
              to="/addProduct"
              className="mobile__link"
              onClick={() => showMenu(!show)}
            >
              Add new product
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className="header"
      >
        <Link
          to="/"
          className="header__logo-link"
        >
          <img
            src="images/logo.png"
            className="header__logo"
            alt="Logo"
          />
        </Link>
        <nav
          className="header__nav nav"
        >
          <ul
            className="nav__list"
            style={{
              top,
            }}
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

          <div
            className="nav__button"
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => showMenu(!show)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div
            className="nav__button"
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appBar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <Menu
            id="menu-appBar"
            anchorEl={anchorUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleUserClose}
          >
            <MenuItem
              onClick={() => {
                changeUser('admin');
                handleUserClose();
              }}
            >
              Admin
            </MenuItem>
            <MenuItem
              onClick={() => {
                changeUser('user');
                handleUserClose();
              }}
            >
              User
            </MenuItem>
          </Menu>
        </nav>
      </div>
    </>
  );
};

Header.propTypes = {
  changeUser: PropTypes.func.isRequired,
};
