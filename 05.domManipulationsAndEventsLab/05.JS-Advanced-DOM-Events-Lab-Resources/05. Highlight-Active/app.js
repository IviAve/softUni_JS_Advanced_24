function focused() {
    // const divs = document.querySelectorAll('div');

    // divs.forEach(div => {
    //     const inputs = div.querySelectorAll('input');

    //     inputs.forEach(input => {
    //         input.addEventListener('focus', () => {
    //             div.classList.add('focused');
    //         });

    //         input.addEventListener('blur', () => {
    //             div.classList.remove('focused');
    //         });
    //     });
    // });


    let inputs = Array.from(document.querySelectorAll('input'));

    for (let input of inputs) {
        
        input.addEventListener('focus', () =>{
            input.parentElement.className = 'focused';
        })

        input.addEventListener('blur', () =>{
            input.parentElement.className = '';
        });
    };
}