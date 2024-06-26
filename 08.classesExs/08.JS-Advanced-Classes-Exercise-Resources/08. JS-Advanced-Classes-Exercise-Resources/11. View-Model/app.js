class Textbox {
    //TODO
    
        constructor(selector, invalidSymbolsRegex) {
            this._elements = document.querySelectorAll(selector);
            this._invalidSymbols = invalidSymbolsRegex;
            this.value = ''; // Initialize value property
            
            // Bind event listeners to update value property when input changes
            this._bindElements();
        }
    
        get elements() {
            return this._elements;
        }
    
        get value() {
            return this._value;
        }
    
        set value(newValue) {
            this._value = newValue;
            // Update all elements' values when value property changes
            this._elements.forEach(element => {
                element.value = newValue;
            });
        }
    
        isValid() {
            for (const element of this._elements) {
                if (this._invalidSymbols.test(element.value)) {
                    return false;
                }
            }
            return true;
        }
    
        _bindElements() {
            // Bind input event listeners to update value property when elements change
            this._elements.forEach(element => {
                element.addEventListener('input', () => {
                    this.value = element.value;
                });
            });
        }
    
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
