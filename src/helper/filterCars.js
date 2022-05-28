export const filterCars = ({cars}, {kriteria}) => {
    if (kriteria === "") {
        return cars
    }
    
    const filteredCars = []

    for (let a = 0; a < cars.length; a++) {
        if (cars[a].available.toString() == kriteria[0] &&
            cars[a].availableAt.slice(0,10) >= kriteria[1] &&
            cars[a].availableAt.slice(11,16) >= kriteria[2] &&
            cars[a].capacity >= kriteria[3])
            { filteredCars.push(cars[a])}
    }

    return filteredCars
}