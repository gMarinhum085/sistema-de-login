//VARIÁVEIS
const button = document.getElementById('register-button')
const password = document.getElementById('password')
const email = document.getElementById('email')




//==========================================================================================
//CHAMADA DE EVENTOS
button.addEventListener('click',() => {

    if (password.value==='1234' & email.value === 'admin@admin.com') {
        alert('Login successful')
        
    } else {
        alert('Login failed')

    }
    

})