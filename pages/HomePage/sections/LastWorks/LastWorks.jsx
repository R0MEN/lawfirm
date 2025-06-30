import "./LastWorks.scss"
import Link from "next/link";

const LastWorks = () => {

    return (

        <section className="last-works">
            <div className="container">
                <h2>Наші останні роботи</h2>
                <div className="works-grid">
                    <div className="work-item">
                        <img src="/images/work3.webp" alt="Work 1" className="works" />
                        <div className="work-description">
                            <div className="work-title">
                                <p>Інтернет магазин</p>
                                <p>Інтернет-магазин сантехніки</p>
                            </div>
                            <img src="/images/arrow.svg" alt="Arrow Right" className="arrow-icon" />
                        </div>
                    </div>
                    <div className="work-item">
                        <img src="/images/work3.webp" alt="Work 2" className="works" />
                        <div className="work-description">
                            <div className="work-title">
                                <p>Інтернет магазин</p>
                                <p>Інтернет-магазин сантехніки</p>
                            </div>
                            <img src="/images/arrow.svg" alt="Arrow Right" className="arrow-icon" />
                        </div>
                    </div>
                    <div className="work-item">
                        <img src="/images/work3.webp" alt="Work 3" className="works" />
                        <div className="work-description">
                            <div className="work-title">
                                <p>Інтернет магазин</p>
                                <p>Інтернет-магазин сантехніки</p>
                            </div>
                            <img src="/images/arrow.svg" alt="Arrow Right" className="arrow-icon" />
                        </div>
                    </div>
                    <div className="work-item">
                        <img src="/images/work3.webp" alt="Work 3"  className="works"/>
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
    )
}

export default LastWorks