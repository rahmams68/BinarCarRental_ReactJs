import style from './style.module.css'
import carImg from '../../images/car.png'

export default function Banner() {
    return(
        <div className={style.container}>
            <div className={style.bannerLeft}>
                <h1>Sewa dan Rental Mobil Terbaik di Kawasan Depok</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <a href="car">Mulai Sewa Mobil</a>
            </div>

            <div className={style.bannerRight}>
                <img src={carImg} alt="mobil"/>
            </div>
        </div>
    )
}