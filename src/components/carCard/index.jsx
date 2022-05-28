import style from './style.module.css'
import userIcon from '../../images/fi_users.png'
import settingIcon from '../../images/fi_settings.png'
import calendarIcon from '../../images/fi_calendar.png'

export default function CarCard({car}) {    
    return(
        <div className={style.container}>
            <img className={style.carImg} src={car.image} />

            <div className={style.info}>
                <p>{car.manufacture} - {car.model}</p>
                <h4>Rp {car.rentPerDay} / hari</h4>
                <p className={style.desc}>{car.description}</p>

                <div className={style.icon}>
                    <img src={userIcon} />
                    <p>{car.capacity}</p>
                </div>

                <div className={style.icon}>
                    <img src={settingIcon} />
                    <p>{car.transmission}</p>
                </div>

                <div className={style.icon}>
                    <img src={calendarIcon} />
                    <p>{car.year}</p>
                </div>
            </div>

            <button>Pilih Mobil</button>
        </div>
    )
}