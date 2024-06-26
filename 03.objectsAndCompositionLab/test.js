function test(params) {
    
    let areas = {
        area1: {
            cat: 10,
            mouse: 15,

        },
        area2: {
            rat:5,
            monkey: 10,
        },
        area3: {

            demon:29,
            devil:45,
        },
    }

    let entries = Object.entries(areas);

    for (const [area, animals] of entries) {
        let oneArea = (`In ${area}:`);
        let entriesAnimals = Object.entries(animals);
        for (const [animal, count] of entriesAnimals ) {
            oneArea += (`- ${animal}: ${count}`);
        }
        console.log(oneArea);
    }

    
    console.table(entries);
}

test();