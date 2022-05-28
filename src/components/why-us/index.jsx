import style from './style.module.css'
import completeIcon from '../../images/icon_complete.png'
import priceIcon from '../../images/icon_price.png'
import hoursIcon from '../../images/icon_24hrs.png'
import professionalIcon from '../../images/icon_professional.png'

export default function WhyUs() {
    return(
        <div className={style.container}>
            <div className={style.info}>
                <h2>Why Us?</h2>
                <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>

            <div className={style.reasons}>
                <div className={style.reason}>
                    <img className={style.reasonIcon} src={completeIcon} alt="icon"/>
                    <h3>Mobil Lengkap</h3>
                    <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat</p>
                </div>

                <div className={style.reason}>
                    <img className={style.reasonIcon} src={priceIcon} alt="icon"/>
                    <h3>Harga Murah</h3>
                    <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>

                <div className={style.reason}>
                    <img className={style.reasonIcon} src={hoursIcon} alt="icon"/>
                    <h3>Layanan 24 Jam</h3>
                    <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>

                <div className={style.reason}>
                    <img className={style.reasonIcon} src={professionalIcon} alt="icon"/>
                    <h3>Sopir Profesional </h3>
                    <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
            </div>
        </div>
    )
}