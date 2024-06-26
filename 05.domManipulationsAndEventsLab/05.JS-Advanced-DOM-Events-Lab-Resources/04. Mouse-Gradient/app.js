function attachGradientEvents() {
    
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove',onClick);

    function onClick(event) {
       
        let x = event.offsetX;
        
        if (x < 0) {
            x = 0;
        }
        let percent = Math.trunc((x / 300) * 100);
        document.getElementById('result').textContent = percent + '%';

    }

   
}