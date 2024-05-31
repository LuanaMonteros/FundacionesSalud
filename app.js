function isValidEmail(email){
    let emailPattern = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
    return emailPattern.test(email);
}

var error = document.getElementById("error");

// function errorMessage(elementId, message){
//     let errorElement = document.getElementById(elementId);
//     errorElement.innerText = message;
// }

// function resetErrorMessages(){
//     let errorElements = document.querySelector(".error-message");
//     errorElements.forEach((element) => {
//         element.innerText = "";
//     });
// }

// document.addEventListener("DOM", ()=>{
//         const form = document.getElementById('formulario_donaciones').addEventListener('submit', function(evt){
//         evt.preventDefault();
        
//         resetErrorMessajes();

//         let nombre = document.getElementById("nombre").value.trim();
//         let apellido = document.getElementById("apellido").value.trim();
//         let email = document.getElementById("email").value.trim();
//         let isValid = true;

//         if (nombre ==='' || nombre === null ) {
//             errorMessage("nombreError","Por favor ingrese un nombre");
//             isValid= false;
//         }
    
//         if (apellido ==='' || apellido === null) {
//             errorMessage("apellidoError","Por favor ingrese un nombre");
//             isValid= false;
//         }

//         if(!isValidEmail(email)){
//             errorMessage("emailError","Por favor ingrese un email valido");
//         }


//         if(isValid){
//             alert("Formulario enviado!");
//         }
//     });
// });

var form = document.getElementById('formulario_donaciones');
form.addEventListener('submit', function(evt){
    evt.preventDefault();
    let errorMessage = [];
    let nombre = document.getElementById("nombre").value.trim();
     
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let isValid = true;
    
    if (nombre ==='' || nombre === null ) {
        errorMessage.push("Por favor ingrese un nombre");
        isValid= false;
    }
        
    if (apellido ==='' || apellido === null) {
        errorMessage.push("Por favor ingrese un nombre");
        isValid= false;
    }

    if(!isValidEmail(email)){
        errorMessage.push("Por favor ingrese un email valido");
    }


    if(isValid){
        alert("Formulario enviado!");
    }else{
        error.innerHTML = errorMessage.join(",");
    }
});