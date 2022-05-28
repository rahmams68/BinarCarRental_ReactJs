import style from './style.module.css'
import logo from '../../images/logo.png'
import menuIcon from '../../images/fi_menu.png'

export default function Navbar() {
    return(
        <div className={style.container}>
            <div className={style.navLeft}>
                <img src={logo} alt='logo'/>
            </div>

            <div className={style.navRight}>
                <a href='#services'>Our Services</a>
                <a href="#why-us">Why Us</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#faq">FAQ</a>
                <a href="#" className={style.btnRegist}>Register</a>
            </div>

            <div className={style.sideNav}>
                <img src={menuIcon} alt='menu-icon'/>

                <div>
                <p>BCR</p>
                <a href="#services">Our Services</a>
                <a href="#why-us">Why Us</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#faq">FAQ</a>
                <a href="#" className={style.btnRegist}>Register</a>
              </div>

              <div className={style.darkBackground}></div>
            </div>
        </div>
    )
}