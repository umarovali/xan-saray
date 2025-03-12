import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Delivery from "./components/Delivery/Delivery";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";

export default function Home() {
    return (
        <main>
            <Hero />
            <AboutUs />
            <Slider />
            <Info />
            <Menu />
            <Delivery />
            <Contact />
        </main>
    )
}
