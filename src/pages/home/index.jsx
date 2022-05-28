import style from './style.module.css'
import Navbar from '../../components/navbar'
import Banner from '../../components/banner'
import Service from '../../components/services'
import WhyUs from '../../components/why-us'
import Testimonial from '../../components/testimonial'
import GettingStarted from '../../components/getting-started'
import Faq from '../../components/faq'
import Footer from '../../components/footer'

export default function Home() {
    return(
        <div className={style.container}>
            <header>
                <Navbar/>
                <Banner/>
            </header>

            <div id='services' className={style.containerServices}>
                <Service/>
            </div>

            <div id='why-us' className={style.containerWhyUs}>
                <WhyUs/>
            </div>

            <div id='testimonial' className={style.containerTestimonial}>
                <Testimonial/>
            </div>

            <div id='getting-started'>
                <GettingStarted/>
            </div>

            <div id='faq'>
                <Faq/>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}