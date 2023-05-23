//BotonMenuResponsive
document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})


function showAlert(){
        alert('Hola esta es una alerta desde JavaScript!');
    }
    
    const form = document.getElementById("myForm")
    
    form.addEventListener("submit", function(lala){ lala.preventDefault(), validateForm();})
    
    function validateForm(){
        const emailInput = document.getElementById("email")
        const inputValue = input.value;
    
        if(!validateEmail(inputValue)){
            alert('Por favor ingrese un correo electronico válido')
        }else{
            alert('Correo electronico enviado correctamente')
        }
    }
    
    function validateEmail(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
        return regex.test(email)
    }
    
