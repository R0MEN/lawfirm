"use client"
import "./Pricing.scss"
import React, { useState } from "react";

const Pricing = () => {
    const [activeType, setActiveType] = React.useState("Сайт-візитка");

    const prices = {
        "Сайт-візитка": "від 8000 грн",
        "Корпоративний сайт": "від 15000 грн",
        "Інтернет-магазин": "від 25000 грн",
        "Landing Page": "від 7000 грн"
    };


    return (
        <section className="pricing" >
            <div className="container">
                <div className="pricing-content">
                    <div className="pricing-title">
                        <h2>Розрахувати вартість</h2>
                        <p>Оберіть тип сайту, кількість блоків, наявність медіаматеріалів та багатомовність та вкажіть наявність технічного завдання.</p>
                        <p>Час: до 5 хв</p>
                    </div>

                    <div className="pricing-form">
                        <p>Який тип сайту потрібен?</p>
                        <button
                            className={`form-btn${activeType === "Сайт-візитка" ? " active" : ""}`}
                            onClick={() => setActiveType("Сайт-візитка")}
                        >
                            Сайт-візитка
                        </button>
                        <button
                            className={`form-btn${activeType === "Корпоративний сайт" ? " active" : ""}`}
                            onClick={() => setActiveType("Корпоративний сайт")}
                        >
                            Корпоративний сайт
                        </button>
                        <button
                            className={`form-btn${activeType === "Інтернет-магазин" ? " active" : ""}`}
                            onClick={() => setActiveType("Інтернет-магазин")}
                        >
                            Інтернет-магазин
                        </button>
                        <button
                            className={`form-btn${activeType === "Landing Page" ? " active" : ""}`}
                            onClick={() => setActiveType("Landing Page")}
                        >
                            Landing Page
                        </button>
                        <div className="price-result">
                            {prices[activeType]}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Pricing