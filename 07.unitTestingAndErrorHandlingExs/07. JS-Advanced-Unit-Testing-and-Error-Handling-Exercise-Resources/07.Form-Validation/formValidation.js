function validate() {
    document.querySelector("#submit").type = "button";
  document.querySelector("#company").addEventListener("change", (e) => {
    console.log(e.target);
    if (document.querySelector("#company").checked) {
      document.querySelector("#companyInfo").style.display = "block";
    } else {
      document.querySelector("#companyInfo").style.display = "none";
    }
  });
 
  document.querySelector("#submit").addEventListener("click", (e) => {
    let validOut = [];
    let userName = document.querySelector("#username");
    let email = document.querySelector("#email");
    let passWord = document.querySelector("#password");
    let confirmPass = document.querySelector("#confirm-password");
    let checkBox = document.querySelector("#company");
    let userTest = /^[A-Za-z0-9]{3,20}$/;
    let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
    let passTest = /^[\w]{5,15}$/;
 
    //console.log(checkBox.checked);
 
    if (userTest.exec(userName.value) === null) {
      userName.style.borderColor = "red";
      validOut.push(false);
    } else {
      userName.style.borderColor = "";
      validOut.push(true);
    }
 
    if (emailTest.exec(email.value) === null) {
      email.style.borderColor = "red";
      validOut.push(false);
    } else {
      email.style.borderColor = "";
      validOut.push(true);
    }
 
    if (
      passWord.value === confirmPass.value &&
      passTest.exec(confirmPass.value) != null &&
      passTest.exec(passWord.value) != null
    ) {
      confirmPass.style.borderColor = "";
      passWord.style.borderColor = "";
      validOut.push(true);
    } else {
      confirmPass.style.borderColor = "red";
      passWord.style.borderColor = "red";
      validOut.push(false);
    }
 
    if (checkBox.checked) {
      let company = document.querySelector("#companyNumber");
      if (company.value < 1000 || company.value > 9999) {
        company.style.borderColor = "red";
        validOut.push(false);
      } else {
        company.style.borderColor = "";
        validOut.push(true);
      }
    }
 
    if (!validOut.includes(false)) {
      document.querySelector("#valid").style.display = "block";
    } else {
      document.querySelector("#valid").style.display = "none";
    }
  });


  // another one solve but still dont work

//   document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const username = document.getElementById('username');
//     const password = document.getElementById('password');
//     const confirmPassword = document.getElementById('confirm-password');
//     const email = document.getElementById('email');
//     const companyCheckbox = document.getElementById('company');
//     const companyInfo = document.getElementById('companyInfo');
//     const companyNumber = document.getElementById('companyNumber');
//     const validDiv = document.getElementById('valid');

//     companyCheckbox.addEventListener('change', () => {
//         if (companyCheckbox.checked) {
//             companyInfo.style.display = 'block';
//         } else {
//             companyInfo.style.display = 'none';
//         }
//     });

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         let isValid = true;

//         // Validate username
//         if (!/^[a-zA-Z0-9]{3,20}$/.test(username.value)) {
//             username.style.borderColor = 'red';
//             isValid = false;
//         } else {
//             username.style.borderColor = 'none';
//         }

//         // Validate password
//         if (!/^\w{5,15}$/.test(password.value)) {
//             password.style.borderColor = 'red';
//             isValid = false;
//         } else {
//             password.style.borderColor = 'none';
//         }

//         // Validate confirm password
//         if (password.value !== confirmPassword.value || !/^\w{5,15}$/.test(confirmPassword.value)) {
//             confirmPassword.style.borderColor = 'red';
//             isValid = false;
//         } else {
//             confirmPassword.style.borderColor = 'none';
//         }

//         // Validate email
//         if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
//             email.style.borderColor = 'red';
//             isValid = false;
//         } else {
//             email.style.borderColor = 'none';
//         }

//         // Validate company number if checkbox is checked
//         if (companyCheckbox.checked) {
//             if (!/^\d{4}$/.test(companyNumber.value) || companyNumber.value < 1000 || companyNumber.value > 9999) {
//                 companyNumber.style.borderColor = 'red';
//                 isValid = false;
//             } else {
//                 companyNumber.style.borderColor = 'none';
//             }
//         }

//         // Show or hide the valid div
//         if (isValid) {
//             validDiv.style.display = 'block';
//         } else {
//             validDiv.style.display = 'none';
//         }
//     });
// });
}



// You are given the task to write validation for the fields of a simple form.
// HTML and JavaScript Code
// You are provided a skeleton containing the necessary files for your program.
// The validations should be as follows:
// •	The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are allowed.
// •	The password and confirm-password must be between 5 and 15 inclusively symbols and only
//  word characters are allowed (letters, numbers, and _).
// •	The inputs of the password and confirm-password field must match.
// •	The email field must contain the “@” symbol and at least one "."(dot) after it.
// If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible and the 
// Company Number field must also be validated, if it isn’t checked the Company fieldset should have
//  the style "display: none;" and the value of the Company Number field shouldn’t matter. 
// •	The Company Number field must be a number between 1000 and 9999.
// •	Use addEventListener() function to attach an event listener for the "change" event to the checkbox.
// Every field with an incorrect value when the [Submit] button is pressed should have the following
//  style applied border-color: red;, alternatively, if it’s correct it should have style border: none;.
//   If there are required fields with an incorrect value when the [Submit] button is pressed,
//    the div with id="valid" should become hidden ("display: none;"), alternatively if all 
//    fields are correct the div should become visible.
// Constraints
// •	You are NOT allowed to change the HTML or CSS files provided.
// •	All buttons within an <form> automatically work as submit buttons, unless their type 
// is manually assigned to something else, to avoid reloading the page upon clicking 
// the [Submit] button you can use event.preventDefault()
// •	The validation for the separate fields can be done using regex.

