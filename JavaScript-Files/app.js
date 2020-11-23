// Sign Up Validation Start
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mobile = document.getElementById('mobile');
const address = document.getElementById('address');
const category = document.getElementById('category');
form.addEventListener('submit',e=>{
    e.preventDefault();
    signupvalidate();
});
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccessFor(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function signupvalidate(){
    // trim to remove the whitespace
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const mobileValue = mobile.value.trim();
    const addressValue = address.value.trim();
    // Username Section
    if(usernameValue === ''){
        setErrorFor(username,"Username can't be blank");        
    }
    else if(usernameValue.length<3){
        setErrorFor(username,"Username must be 3 character");
    }
    else{
        setSuccessFor(username);
    }
    // Email Section
    if(emailValue === ''){
        setErrorFor(email,"Email can't be blank");
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,"Not a valid email");
    }
    else{
        setSuccessFor(email);
    }
    // Mobile Section
    if(mobileValue === ''){
        setErrorFor(mobile,"Mobile number can't be blank");
    }
    else if(mobileValue.length != 11){
        setErrorFor(mobile,"Enter 11 digit");
    }
    else if(mobileValue.charAt(0) !=0){
        setErrorFor(mobile,"First Digit Should be 0");
    }
    else if(mobileValue.charAt(1) !=1){
        setErrorFor(mobile,"Second Digit Should be 1");
    }
    else if(mobileValue.charAt(2) !=3 && mobileValue.charAt(2) != 5 && mobileValue.charAt(2) != 6 && mobileValue.charAt(2) != 7
    && mobileValue.charAt(2) != 8 && mobileValue.charAt(2) != 9){
        setErrorFor(mobile,"Third Digit Should be 3/5/6/7/8 or 9");
    }
    else{
        setSuccessFor(mobile);
    }
    //Password Section
    if(passwordValue === ''){
        setErrorFor(password,"Password can't be blank");
    }
    else{
        setSuccessFor(password);
    }
    //Address Section\
    if(addressValue === ''){
        setErrorFor(address,"Address can't be blank");
    }
    else{
        setSuccessFor(address);
    }
}

