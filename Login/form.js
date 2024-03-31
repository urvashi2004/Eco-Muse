// // form loading animation
const form = [...document.querySelector('.form').children];

form.forEach=((item,i)=>{
    setTimeout(()=>{
        item.style.opacity=1;
    },i*100);
})

// window.onload = () => {
//     if(sessionStorage.name){
//         location.href = '/';
//     }
// }



function login(){

    // var email=document.getElementById("email").value;
    // // var name=document.getElementById("name").value;
    // var password=document.getElementById("password").value;


    // if(email=="abcd@gmail.com" && password=="disha@123"){
    //     alert("successfully logged in");
    //     window.location.assign("index.html");

    // }else{
    //     alert("invalid login id or password");
    //     return;
    // }
    window.location.assign("index.html");
}

function register(){

    // var email=document.getElementById("email").value;
    // var name=document.getElementById("name").value;
    // var password=document.getElementById("password").value;


    // if(email=="abcd@gmail.com" && password=="disha@123" && name=="Disha"){
    //     alert("successfully registered");
    //     window.location.assign("login.html");

    // }else{
       
    //     return;
    // }
    window.location.assign("login.html");
}

function loginpage(){
    window.location.assign("login.html");
}

function registerpage(){
    window.location.assign("register.html");
}