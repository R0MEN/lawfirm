"use client";
import React, { useState } from "react";
import "./header.scss";
const { handleSwipeGesture, toggleBurgersClasses, closeMenu } = require("./burger.js");

export default function Header() {
    const [menuState, setMenuState] = useState({
        burgerActive: false,
        headerNavActive: false,
        bodyActiveModal: false,
    });

    const handleBurgerClick = () => {
        setMenuState(toggleBurgersClasses(menuState));
    };

    const handleCloseMenu = () => {
        setMenuState(closeMenu());
    };

    return (
        <header>
            <div className="container">
                <img src="/images/gradi.svg" alt="" className="header__bg" />
                <div className="row">
                    <a href="/" className="logo">
                        <h2>LawFirm</h2>
                    </a>
                    <nav className={`header__menu${menuState.headerNavActive ? " active" : ""}`}>
                        <ul className="header__menu-list header_li_wrapper">
                            <li><a href="/">Головна</a></li>
                            <li><a href="/">Послуги</a></li>
                            <li><a href="/">Наші роботи</a></li>
                            <li><a href="/">Ціни</a></li>
                            <li><a href="/">Про нас</a></li>
                            <li><a href="/">Блог</a></li>
                            <li><a href="/">Контакти</a></li>
                        </ul>
                    </nav>
                    <button className="lang-btn">En</button>
                    <button className="btn" onClick={handleCloseMenu}>Зв’язатись</button>
                    <div className="header__mobile-nav">
                        <div
                            className={`burger${menuState.burgerActive ? " active" : ""}`}
                            onClick={handleBurgerClick}
                        >
                            <figure></figure>
                            <figure></figure>
                            <figure></figure>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}