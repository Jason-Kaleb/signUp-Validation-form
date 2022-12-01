try {

    function validation() {
       return;
   }; 
   
   //Below are functions to check if details/information entered is correct
   
   function nameV() {
        let fname = document.getElementById('name');
       let fName2 = document.getElementById('name').value;
       const regExp = /^[A-Za-z ]{2,20}/;
   
       if (regExp.test(fName2)) {
        fname.style.border = '2px solid black';
           return true;
       } else {
        fname.style.border = '2px solid red';
           return false;
       };
   
   };
   
   function lnameV() {
       
       let lName = document.getElementById('last');
       let lName2 = document.getElementById('last').value;
       const regExp = /^[A-Za-z ]{2,20}/;
   
       if (regExp.test(lName2)) {
        lName.style.border = '2px solid black';
           return true;
       } else {
        lName.style.border = '2px solid red';
           return false;
       };
   
   }; 
   
    function addressV() {
       
       let ad = document.getElementById('myAddress');
       let ad2 = document.getElementById('myAddress').value;
       const regExp = /^[0-9]{2,4}( )[a-zA-Z]{2,20}( )[a-zA-Z]{2,8}$/
   
       if (regExp.test(ad2)) {
        ad.style.border = '2px solid black';
           return true;
       } else {
        ad.style.border = '2px solid red';
           return false;
       };
   
   }; 
   
   function emailV() {
   let email = document.getElementById('myEmail');
   let email2 = document.getElementById('myEmail').value;
   const regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})/;
   
   if (regExp.test(email2)) {
    email.style.border = '2px solid black';
       return true;
   } else {
    email.style.border = '2px solid red';
       return false;
   };
   
   };
   
   
   function numberV() {
   
   let number = document.querySelector('#number');
   let number2 = document.querySelector('#number').value;
   const regExp = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
   
   if (regExp.test(number2)) {
    number.style.border = '2px solid black';
       return true;
   }
    else {
        number.style.border = '2px solid red';
       return false;
   }
   
   };
   
   function locationV(){
   
       let getSelect = document.getElementById('select');
       let e = getSelect.options[getSelect.selectedIndex].value;
   
       if (e >=1) {
           console.log('Hello');
           return true;
       } else {
           alert('Please select location');
           return false;
       }
   
   };
   
   //The code below prevents user submitting form with incorrect details
   //If the details entered is correct the form will submit 
   
   document.querySelector("form").addEventListener('submit', (e) =>{
   
       e.preventDefault();
       validate();
   })
   
   function validate() {
   
       let name = nameV();
       let lname = lnameV();
       let ad = addressV();
       let email = emailV();
       let num = numberV();
   
       if (name && lname && ad && email && num) {
           document.querySelector('form').submit();
           return true;
       } else{
           return false;
       }
   } 
       } 
   
       catch(e) {
           alert(e.message)
       }
   
