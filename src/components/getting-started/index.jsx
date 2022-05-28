import style from './style.module.css'

export default function GettingStarted() {
    return(
        <div className={style.container}>
            <div className={style.info}>
                <h2>Sewa Mobil di Depok Sekarang</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat deserunt tenetur, quae dolore amet facere nostrum magni sit velit hic corrupti architecto pariatur!</p>
            </div>

            <div className={style.btnStart}>
                <a href='car'>Mulai Sewa Mobil</a> 
            </div>
        </div>
    )
}