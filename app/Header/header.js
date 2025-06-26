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
                            <li><Link href="/">Наші роботи</Link></li>
                            <li><Link href="/">Ціни</Link></li>
                            <li><Link href="/">Про нас</Link></li>
                            <li><Link href="/">Блог</Link></li>
                            <li><Link href="/">Контакти</Link></li>
                            </div>
                            <div className=" header__menu-right ">
                                <button className="lang-btn">En</button>
                                <button className="btn" onClick={handleCloseMenu}>Зв’язатись</button>
                            </div>
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