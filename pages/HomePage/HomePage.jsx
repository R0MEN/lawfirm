import Hero from "./sections/Hero/Hero.jsx";
import Cards from "./sections/Cards/Cards.jsx";
import Header from "@/components/Header/header.js";
import Pricing from "./sections/Pricing/Pricing.jsx";
import LastWorks from "./sections/LastWorks/LastWorks.jsx";
import FAQSection from "./sections/FAQ/faq.js";

const HomePage = () => {

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Cards />
                <Pricing />
                <LastWorks/>
                <section className="faq">
                    <FAQSection />
                </section>
            </main>
        </>
    )
}

export default HomePage