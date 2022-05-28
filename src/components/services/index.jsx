import style from './style.module.css'
import serviceImg from '../../images/img_service.png'
import listIcon from '../../images/list_icon.png'

export default function Service() {
    return(
        <div className={style.container}>
            <div className={style.mainLeft}>
                <img src={serviceImg} alt='service-img'/>
            </div>

            <div className={style.mainRight}>
                <h2>Best car rental for any kind of trip in Depok!</h2>
                <p>Sewa mobil di Depok bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>

                <ul>
                    <div>
                        <img src={listIcon}/><li>Sewa Mobil dengan Supir di Depok 12 Jam</li>
                    </div>

                    <div>
                        <img src={listIcon}/><li>Sewa Mobil Lepas Kunci di Depok 24 Jam</li>
                    </div>
                
                    <div>
                        <img src={listIcon}/><li>Sewa Mobil Jangka Panjang Bulanan</li>
                    </div>
                
                    <div>
                        <img src={listIcon}/><li>Gratis Antar - Jemput Mobil di Bandara</li>
                    </div>

                    <div>
                        <img src={listIcon}/><li>Layanan Airport Transfer / Drop In Out</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}