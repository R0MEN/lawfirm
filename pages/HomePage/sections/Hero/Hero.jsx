"use client"
import "./Hero.scss"
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 10 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 10 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX / 10);
            mouseY.set(e.clientY / 10);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, [mouseX, mouseY]);
    return (
        <section className="hero">
            <div className="container">
            <img src="./images/Hero.webp" alt="HeroBg" className="hero-back"/>
                <div className="hero__wrapper">
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
            <img src="images/Ellipse1.svg" alt="bg" className="bg-elipse"/>
            <img src="images/Ellipse2.svg" alt="bg" className="bg-elipse2"/>
        </section>
    )
};

export default Hero;