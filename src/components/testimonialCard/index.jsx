import style from './style.module.css'
import profile from '../../images/profile.png'
import rate from '../../images/rate.png'

export default function TestimonialCard() {
    return(
        <div className={style.container}>
            <div className={style.left}>
                <img src={profile} />
            </div>

            <div className={style.right}>
                <img src={rate} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus at eros pharetra varius maximus vitae dolor. Quisque id nisl quis tellus sollicitudin varius. Suspendisse dignissim velit et posuere pellentesque.</p>
                <h4>Rahma Maulida 20, Depok</h4>
            </div>
        </div>
    )
}