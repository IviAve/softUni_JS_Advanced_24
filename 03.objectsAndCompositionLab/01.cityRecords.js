function cityRecords(cityName,population,treasury) {
    
    let city = {
        name: cityName,
        population,
        treasury,
    }
    return(city);
    
}

cityRecords('Tortuga',
7000,
15000
)
cityRecords('Santo Domingo',
12000,
23500
)

// You will receive a city’s name (string), population (number),
//  and treasury (number) as arguments, which you will need to
//   set as properties of an object and return it.