import api from './baseUrl'

export default async () => {
    try {
        const response = await api({
            url: '/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
        })

        return response.data
    }

    catch(err) {
        console.log(err)
        throw err
    }
}