import style from './style.module.css'
import btnNext from '../../images/btn-next.png'
import btnPrev from '../../images/btn-prev.png'
import TestimonialCard from '../testimonialCard'

export default function Testimonial() {
    return(
        <div className={style.container}>
            <div className={style.info}>
                <h2>Testimonial</h2>
                <p>Berbagai review positif dari para pelanggan kami</p>
            </div>

            <div className={style.reviews}>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>

            <div className={style.btnReview}>
                <img src={btnPrev} alt="button"/>
                <img src={btnNext} alt="button"/>
            </div>
        </div>
    )
}