import style from './style.module.css'
import logo from '../../images/logo.png'
import facebookIcon from '../../images/icon_facebook.png'
import instagramIcon from '../../images/icon_instagram.png'
import twitterIcon from '../../images/icon_twitter.png'
import mailIcon from '../../images/icon_mail.png'
import twitchIcon from '../../images/icon_twitch.png'

export default function Footer() {
    return(
        <div className={style.container}>
            <div className={style.contact}>
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>

            <div className={style.menu}>
                <a href="">Our Services</a>
                <a href="">Why Us</a>
                <a href="">Testimonial</a>
                <a href="">FAQ </a>
            </div>

            <div className={style.connect}>
                <p>Connect with us</p>
                <div className={style.connectIcons}>
                    <img src={facebookIcon} alt="icon"/>
                    <img src={instagramIcon} alt="icon"/>
                    <img src={twitterIcon} alt="icon"/>
                    <img src={mailIcon} alt="icon"/>
                    <img src={twitchIcon} alt="icon"/>
                </div>
            </div>

            <div className={style.copyright}>
                <p>Copyright Binar 2022</p>
                <img src={logo} alt="logo"/>
        </div>
        </div>
    )
}