import axios from "axios";

export const GET_LIST_CARS = "GET_LIST_CARS"

export const getListCars = () => {
    return (dispatch) => {
        // Loading
        dispatch({
            type: GET_LIST_CARS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API
        axios({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
            timeout: 120000
        })
            .then((response) => {
                // Berhasil get API
                dispatch({
                    type: GET_LIST_CARS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })

            .catch((error) => {
                // Gagal set API
                dispatch({
                    type: GET_LIST_CARS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

// export const getFilteredData = ({cars}, {kriteria}) => {
//     return (dispatch) => {
//         dispatch({
//             type: GET_FILTERED_DATA,
//             filteredData: filterCars({cars: cars}, {kriteria: kriteria})
//         })
//     }
// }