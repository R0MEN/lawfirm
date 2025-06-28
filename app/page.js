"use client";
import "./MainPage.scss";
import Header from "./Header/header.js";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import FAQSection from "./FAQ/faq.js";
import Link from "next/link";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 10 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 10 });

  const [activeType, setActiveType] = React.useState("Сайт-візитка");

  const prices = {
    "Сайт-візитка": "від 8000 грн",
    "Корпоративний сайт": "від 15000 грн",
    "Інтернет-магазин": "від 25000 грн",
    "Landing Page": "від 7000 грн"
  };


  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / 10);
      mouseY.set(e.clientY / 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main>
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="content-left">
              <div className="badge">СТВОРЮЄМО</div>
              <h1 className="main-title">Створюємо сайти, які працюють на вас</h1>
              <p className="description">
                Our company has a rich history of delivering high-quality web solutions tailored to meet our clients needs. Our mission is to provide professional support, tailored solutions, and use modern technologies to ensure high customer satisfaction.
              </p>
              <button className="btn">Зв&rsquo;язатись</button>
            </div>

            <div className="content-right">
              <div className="floating-elements">
                <>
                  <motion.img
                    src="/images/shape2.svg"
                    alt="Shape 2"
                    className="shape"
                    style={{ x: springX, y: springY }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.img
                    src="/images/shape1.svg"
                    alt="Shape 1"
                    className="shape1"
                    style={{
                      x: useSpring(mouseX, { stiffness: 50 }),
                      y: useSpring(mouseY, { stiffness: 50 })
                    }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  />
                </>
              </div>
            </div>
          </div>
        </div>
        <div className="links__container_turned links__container">
          <ul className="features-list">
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
          </ul>
        </div>
        <div className="links__container">
          <ul className="features-list">
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
            <li>Сайти візитки</li>
            <li>Корпоративні сайти</li>
            <li>Технічні завдання</li>
            <li>Дизайн</li>
            <li>Верстка</li>
            <li>Кодинг</li>
            <li>Хостинг</li>
          </ul>
        </div>
      </section>
      <section className="cards">
        <div className="container">
          <div className="cards-content">
            <div className="wrapper__top">
              <div className="card">
                <h2 className="card-title">Наші послуги</h2>
                <p className="card-description">
                  Це односторінковий веб-сайт, створений для просування конкретного продукту чи послуги.
                </p>
                <p><b>Термін:</b> до 5 робочих днів</p>
                <p><b>Ціна:</b> від 8000 грн</p>
                <button className="cta">Дізнатись більше</button>
              </div>
              <div className="card">
                <h2 className="card-title">Наші проекти</h2>
                <p className="card-description">
                  Це односторінковий веб-сайт, створений для просування конкретного продукту чи послуги.
                </p>
                <p><b>Термін:</b> до 5 робочих днів</p>
                <p><b>Ціна:</b> від 8000 грн</p>
                <button className="cta">Дізнатись більше</button>
              </div>
              <div className="services">
                <h2 className="card-title">Наші послуги</h2>

                <button className="cta">Деталніше</button>
              </div>
            </div>
            <div className="wrapper__bottom">
              <div className="card">
                <h2 className="card-title">Зв&rsquo;яжіться з нами</h2>
                <p className="card-description">
                  Це односторінковий веб-сайт, створений для просування конкретного продукту чи послуги.
                </p>
                <p><b>Термін:</b> до 5 робочих днів</p>
                <p><b>Ціна:</b> від 8000 грн</p>
                <button className="cta">Дізнатись більше</button>
              </div>
              <div className="card">
                <h2 className="card-title">Зв&rsquo;яжіться з нами</h2>
                <p className="card-description">
                  Це односторінковий веб-сайт, створений для просування конкретного продукту чи послуги.
                </p>
                <p><b>Термін:</b> до 5 робочих днів</p>
                <p><b>Ціна:</b> від 8000 грн</p>
                <button className="cta">Дізнатись більше</button>
              </div>
              <div className="card">
                <h2 className="card-title">Зв&rsquo;яжіться з нами</h2>
                <p className="card-description">
                  Це односторінковий веб-сайт, створений для просування конкретного продукту чи послуги.
                </p>
                <p><b>Термін:</b> до 5 робочих днів</p>
                <p><b>Ціна:</b> від 8000 грн</p>
                <button className="cta">Дізнатись більше</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing">
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
      </section>
      <section className="last-works">
        <div className="container">
          <h2>Наші останні роботи</h2>
          <div className="works-grid">
            <div className="work-item">
              <img src="/images/work3.webp" alt="Work 1" />
              <div className="work-description">
                <div className="work-title">
                  <p>Інтернет магазин</p>
                  <p>Інтернет-магазин сантехніки</p>
                </div>
                <img src="/images/arrow.svg" alt="Arrow Right" className="arrow-icon" />
              </div>
            </div>
            <div className="work-item">
              <img src="/images/work3.webp" alt="Work 2" />
              <div className="work-description">
                <div className="work-title">
                  <p>Інтернет магазин</p>
                  <p>Інтернет-магазин сантехніки</p>
                </div>
                <img src="/images/arrow.svg" alt="Arrow Right" className="arrow-icon" />
              </div>
            </div>
            <div className="work-item">
              <img src="/images/work3.webp" alt="Work 3" />
              <div className="work-description">
                <div className="work-title">
                  <p>Інтернет магазин</p>
                  <p>Інтернет-магазин сантехніки</p>
                </div>
                <img src="/images/arrow.svg" alt="Arrow Right" className="arrow-icon" />
              </div>
            </div>
            <div className="work-item">
              <img src="/images/work3.webp" alt="Work 3" />
              <div className="work-description">
                <div className="work-title">
                  <p>Інтернет магазин</p>
                  <p>Інтернет-магазин сантехніки</p>
                </div>
                <img src="/images/arrow.svg" alt="Arrow Right" className="arrow-icon" />
              </div>
            </div>
          </div>
          <Link href={"/"} className="more">Переглянути більше <img src="/images/link.svg" alt="link" /></Link>
        </div>
      </section>
      <section className="faq">
      <FAQSection />
      </section>
    </main>
  );
}
