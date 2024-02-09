const form2 = document.querySelector("#form2");
form2.addEventListener("submit", function(event){

  event.preventDefault();
  
  // Do your coding here, e.g. validate input, etc.

  // Programmatically submit the form:
  // form2.submit();

});

// //------------------------------
// // FORM VALIDATION

    const mail = document.getElementById("txtmail");
    
    mail.addEventListener("input", function(e) {
    
        if (mail.validity.typeMismatch) {
            mail.setCustomValidity("Please provide a valid email address");
        } else
            mail.setCustomValidity("");
        }
    );


    function checkEmail() {
        const email = document.getElementById("txtmail");
        //right text email format
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email.value)) {
            alert("Your mail is wrong");
            email.focus;
            return false;
        }
    }


