// import { useEffect, useState } from 'react'
import style from './style.module.css'
import Navbar from '../../components/navbar'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import FilterBox from '../../components/filter-box'

export default function Car() {
    return(
        <div className={style.container}>
            <header>
                <Navbar/>
                <Banner/>
            </header>

            <div className={style.resultContainer}>
                <FilterBox/>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}