function encodeAndDecodeMessages() {
    
    let buttons = document.querySelectorAll('#main button');
    let textArea = document.querySelectorAll('#main textarea');

    let encodeTextArea = textArea[0];
    let decodeTextArea = textArea[1];

    let encodeBtn = buttons[0];
    let decodeBtn = buttons[1];

    encodeBtn.addEventListener('click',encodeAndSend);
    decodeBtn.addEventListener('click',decodeAndRead);

    function encodeAndSend(event) {

        let text = encodeTextArea.value;
        let encodeMsg = '';

        for (let el of text) {

            let charInt = el.charCodeAt(0) + 1;
            let newChar = String.fromCharCode(charInt);
            encodeMsg += newChar;
            
        }
        decodeTextArea.value = encodeMsg;
        encodeTextArea.value = '';

        
    }

    function decodeAndRead(event) {
        
        let text = decodeTextArea.value;
        let decodeMsg = '';

        for (let el of text) {

            let charInt = el.charCodeAt(0) - 1;
            let newChar = String.fromCharCode(charInt);
            decodeMsg += newChar;
            
        }
        decodeTextArea.value = decodeMsg;
    }
}