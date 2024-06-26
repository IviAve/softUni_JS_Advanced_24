function toggle() {

    let button = document.querySelector('.button');
    let text = document.querySelector('#extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        text.style.display = 'block';

    } else {
        button.textContent = 'More';
        text.style.display = 'none';
    }

}



// An HTML file is given and your task is to show more/less information. By clicking the [More] button, 
// it should reveal the content of a hidden div and changes the text of the button to [Less].
//  When the same link is clicked again (now reading Less), hide the div and change the text
//   of the link to More. Link action should be toggleable (you should be able to click the 
//     button an infinite amount of times).
// •	To change the text content of a button, you could use getElementsByClassName. 
// However, that returns a collection and we need only one element from it, so the
//  correct way is to use getElementsByClassName("button")[0] as it will return the needed span element.
// •	After that, we should change the display style of the div with an id "extra".
//  If the display style is "none", we should change it to "block" and the opposite.
// •	Along with all of this, we should change the text content of the button to [Less]/[More].
