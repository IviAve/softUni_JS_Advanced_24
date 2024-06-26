function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    let result = [];

    for (let points of coordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points),
        });
    }

   return result;
}

// function solve(area, vol, input) {
//     return JSON.parse(input)
//         .map(x => ({
//                 area: area.call(x),
//                 volume: vol.call(x),
//             })
//         );
// }

// function solve(area, vol, input) {
//     return JSON.parse(input)
//         .map(x => ({
//                 area: area.call(x),
//                 volume: vol.call(x),
//             })
//         );
// }

// function solve(area, vol, input) {
//     let objects = JSON.parse(input);
//     function calc(obj) {
//     let areaObj = Math.abs(area.call(obj));
//     let volumeObj = Math.abs(vol.call(obj));
//     return { area: areaObj, volume: volumeObj }
//     }
//     return objects.map(calc);
// }


// function solve(area, vol, input) {
    
//     const figures = JSON.parse(input);

//     const results = [];

//     for (let figure of figures) {
        
//         const boundArea = area.bind(figure);
//         const boundVol = vol.bind(figure);

        
//         const currentArea = boundArea();
//         const currentVol = boundVol();

        
//         results.push({
//             area: currentArea,
//             volume: currentVol
//         });
//     }

    
//     return results;
// }

// console.log(solve(area, vol, `[
// {"x":"1","y":"2","z":"10"},
// {"x":"7","y":"7","z":"10"},
// {"x":"5","y":"2","z":"10"}
// ]`));
console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    ));




//     Write a function that calculates the area and the volume of a figure, 
//     which is defined by its coordinates 
// (x, y, z).Input
// You will receive 3 parameters -  the functions area and vol and a string,
//  which contains the figures' coordinates. 
// For more information check the examples.
// Output
// The output should be returned as an array of objects. Each object has two 
// properties: the figure's area and volume.
// [
//   { area: ${area1}, volume: ${volume1} },
//   { area: ${area2}, volume: ${volume2} },
//   . . .
// ]
// Note:
// Submit only the solve function.

