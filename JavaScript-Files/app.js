//Header Part JavaScript Code:
function toggle() {
    var header = document.getElementById("header");
    header.classList.toggle('active');
}

//Sign Up Validation Start:
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
        setErrorFor(username,"আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।");        
    }
    else if(usernameValue.length<3){
        setErrorFor(username,"অনুগ্রহ করে ২-২০ অক্ষরের মধ্যে লিখুন");
    }
    else{
        setSuccessFor(username);
    }
    // Email Section
    if(emailValue === ''){
        setErrorFor(email,"আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।");
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email,"অনুগ্রহ করে একটি কার্যকর ইমেইল অ্যাড্রেস লিখুন।");
    }
    else{
        setSuccessFor(email);
    }
    // Mobile Section
    if(mobileValue === ''){
        setErrorFor(mobile,"আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।");
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
        setErrorFor(password,"আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।");
    }
    else{
        setSuccessFor(password);
    }
    //Address Section\
    if(addressValue === ''){
        setErrorFor(address,"আপনাকে অবশ্যই এই ফিল্ডটি পূরণ করতে হবে।");
    }
    else{
        setSuccessFor(address);
    }
}