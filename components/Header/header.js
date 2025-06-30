"use client";
import React, { useState } from "react";
import "./header.scss";
import Link from "next/link";
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

    // Щоб перевірити, чи відкритий бургер-меню, використовуйте menuState.burgerActive.
    // Наприклад:
    // if (menuState.burgerActive) { ... }

    return (
        <header>
            <div className="container">
                <img src="/images/gradi.svg" alt="" className="header__bg" />
                <div className="row">
                    <Link href="/" className="logo">
                        <h2>LawFirm</h2>
                    </Link>
                    <nav className={`header__menu${menuState.headerNavActive ? " active" : ""}`}>
                        <ul className="header__menu-list">
                            <div className="header__menu-list header__menu-left">
                                <li><Link href="/">Головна</Link></li>
                                <li><Link href="/">Послуги</Link></li>
                                <li><Link href="/">Наші роботи <img src="/images/link.svg" alt="link"/></Link></li>
                                <li><Link href="/">Ціни</Link></li>
                                <li><Link href="/">Про нас</Link></li>
                                <li><Link href="/">Блог</Link></li>
                                <li><Link href="/">Контакти</Link></li>
                            </div>
                            <div className="header__menu-right ">
                                <button className="lang-btn">En</button>
                                <button className="btn" onClick={handleCloseMenu}>Зв’язатись</button>
                            </div>
                            {menuState.headerNavActive && (
                                <div className="header__contacts">
                                    <ul className="header__contacts-list">
                                        <li>
                                            <a href="tel:+380123456789" className="header__contacts-link">
                                                +38 (012) 345-67-89
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+380123456789" className="header__contacts-link">
                                                +38 (012) 345-67-89
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:123@exemple.com" className="header__contacts-link">
                                                123@exemple.com
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            )}
                        </ul>
                    </nav>
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