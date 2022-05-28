import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCars } from '../../actions/carAction'
import { filterCars } from '../../helper/filterCars'
import CarCard from '../carCard'
import getCarsService from '../../service/getCars'
import style from './style.module.css'

export default function FilterBox() {
    const { getListCarsResult } = useSelector((state) => state.CarsReducer)
    const dispatch = useDispatch()
    
    const [kriteria, setKriteria] = useState([])
    const [filteredData, setFilteredData] = useState([])

    const getCars = async () => {
        const allCars = await getCarsService()
        setFilteredData(allCars)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const kriteriaCars = [
            document.getElementById("tipe").value,
            document.getElementById("tgl").value,
            document.getElementById("jam").value,
            document.getElementById("jml").value
        ]

        setKriteria(kriteriaCars)

        const result = filterCars({cars: getListCarsResult}, {kriteria: kriteria})
        setFilteredData(result)
    }

    useEffect(() => {
        dispatch(getListCars())
        getCars()
    }, [dispatch])

    return(
        <div className={style.container}>
            <form name='form' onSubmit={(event) => handleSubmit(event)}>
                <div className={style.filterBox}>
                    <div className={style.inputBox}>
                        <p>Tipe Driver</p>
                        <select name="tipe" id="tipe">
                            <option value="true">Dengan Sopir</option>
                            <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                        </select>
                    </div>

                    <div className={style.inputBox}>
                        <p>Tanggal</p>
                        <input type="date" name="tgl" id="tgl" required/>
                    </div>

                    <div className={style.inputBox}>
                    <p>Waktu Jemput/Ambil</p>
                        <select name="jam" id="jam">
                            <option value="07:00">07.00 WIB</option>
                            <option value="08:00">08.00 WIB</option>
                            <option value="09:00">09.00 WIB</option>
                            <option value="10:00">10.00 WIB</option>
                            <option value="11:00">11.00 WIB</option>
                            <option value="12:00">12.00 WIB</option>
                            <option value="13:00">13.00 WIB</option>
                            <option value="14:00">14.00 WIB</option>
                            <option value="15:00">15.00 WIB</option>
                            <option value="16:00">16.00 WIB</option>
                            <option value="17:00">17.00 WIB</option>
                            <option value="18:00">18.00 WIB</option>
                            <option value="19:00">19.00 WIB</option>
                            <option value="20:00">20.00 WIB</option>
                            <option value="21:00">21.00 WIB</option>
                            <option value="22:00">22.00 WIB</option>
                        </select>
                    </div>

                    <div className={style.inputBox}>
                        <p>Jumlah Penumpang (opsional)</p>
                        <input type="number" name="jml" id="jml" min={1} defaultValue={1} required/>
                    </div>
                    
                    <div className={style.btnFilter}>
                        <button id="cari-mobil">Cari Mobil</button>
                    </div>
                </div>
            </form>

            <div className={style.displayCars}>
                { filteredData.map((item, index) => <CarCard key={index} car={item} />) }
            </div>
        </div>
    )
}