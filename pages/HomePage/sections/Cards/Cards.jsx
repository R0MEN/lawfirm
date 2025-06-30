import "./Cards.scss"

const Cards = () => {

    return (
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
            <img src="images/Ellipse2.svg" alt="elipse" className="bg-elipse2"/>
        </section>
    )
}

export default Cards

