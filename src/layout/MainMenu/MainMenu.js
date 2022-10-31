import React, { useEffect } from 'react';
import classes from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";

const MainMenu = () => {

    return (
      <header className={classes.header}>
        <a href="#" className={classes.logo}>
          WAS
        </a>
        <nav className={classes.group}>
          <ul className={classes.navigation}>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/locations"}>Locations</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Photoshoots</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/connection"}>Connection</NavLink>
            </li>
            <li>
              <NavLink to={"/registration"}>Registration</NavLink>
            </li>
            <li>
              <NavLink to={"/messages"}>Messages</NavLink>
            </li>
            <li>
              <NavLink to={"/reservations"}>Reservations</NavLink>
            </li>
          </ul>
          <ul className={classes.action}>
            <li>
              <a href="#">
                <ion-icon name="search-outline"></ion-icon>
              </a>
            </li>
            <li>
              <NavLink to={"/my-profile"}>
                <ion-icon name="person-outline"></ion-icon>
              </NavLink>
            </li>
            <div className={classes.menuToggle}>
              <ion-icon name="menu-outline"></ion-icon>
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </ul>
        </nav>
      </header>
    );
};

export default MainMenu;