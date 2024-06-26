function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (let line of input) {
         
         let restourantInfo = line.split(' - ');
         let restourantName = restourantInfo.shift();
         let workerData = restourantInfo[0].split(', ');

         for (let worker of workerData) {

            let [name, salary] = worker.split(' ');
            if (!output.hasOwnProperty(restourantName)) {
               
               output[restourantName] = {};
            }
            if (output.hasOwnProperty(restourantName)) {
               
               output[restourantName][name] = Number(salary);
            }
            
         }
      }
      let entries = Object.entries(output);

      for(let entry of entries){
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for(let[name, salary] of values){
            totalSalary += salary;
         }
         avgSalary = totalSalary /values.length;
         if (avgSalary > currAvgSalary) {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
            
         }
      }
      
      let result = Object.entries(output[bestName]).sort((a,b)=> b[1]-a[1]);
      let print = '';

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`;
      document.querySelector('#workers p').textContent = print;
   }
}


// Input
// The input will be received from the given textarea in the form of an array of strings. 
// Each string represents a restaurant with its
//  workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]
//  Output
// •	The output contains two strings
// o	The first one is the best restaurant in the format:
// `Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
// avgSalary and bestSalary must be formatted to the second decimal point.
// o	The second one is all the workers in that restaurant in the following format:
// `Name: {worker name} With Salary: {worker salary} Name: {worker2 name}
//  With Salary: {worker2 salary} Name: {worker3 name} With Salary: {worker3 salary}…`

// Output strings must be set like text content in the following elements:

