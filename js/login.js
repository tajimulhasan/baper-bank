document.getElementById('login-submit').addEventListener('click', function (){
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;

//get user password
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

if(userEmail == 'default@gmail.com' && userPassword == 'bank'){
    window.location.href = 'banking.html'
}
else{
confirm('invalid user')
}
});

