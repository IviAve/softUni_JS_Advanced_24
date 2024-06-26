function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let rations ={
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };



    document.getElementById('daysBtn').addEventListener('click',onConvert);
    document.getElementById('hoursBtn').addEventListener('click',onConvert);
    document.getElementById('minutesBtn').addEventListener('click',onConvert);
    document.getElementById('secondsBtn').addEventListener('click',onConvert);

    function convert(value,unit){

        let days = value/ rations[unit];

        return {
            days:days,
            hours:days*rations.hours,
            minutes:days*rations.minutes,
            seconds:days*rations.seconds,
        };
    }

    function onConvert(event) {
        
        let input = event.target.parentElement.querySelector('input[type="text"]');

        let time =convert(Number(input.value),input.id);

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;

    }


    
}


// Create a program that converts different time units. Your task is to add a click
//  event listener to all [CONVERT] buttons. When a button is clicked, 
//read the corresponding input field,
//   convert the value to the three other time units and display it in the input fields.
// One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we click, the 
// input fields should change depending on the added value on the left.
//  (For example, if we write 48 hours and click convert the days, 
//the field value should change to 2).