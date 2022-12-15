let data = JSON.parse(localStorage.getItem("SignInData")) || [];
let loginusername="";
let btn = document.getElementById("button");
btn.addEventListener("click",()=>{
    data = JSON.parse(localStorage.getItem("SignInData")) || [];

    let password = document.getElementById("password1");
    let username=document.getElementById("username");

    let Password = password.value;
    let Username = username.value;
    let flag = false ;
    data.forEach((element)=>{
        if(element.Username == Username && element.Pass1 == Password || element.Email == Username && element.Pass1 == Password){
            flag = true;
            localStorage.setItem("current-user",JSON.stringify(element))
            console.log(Username)
        }

    })
    if(flag == true){
        alert("Login Successful")
       
        window.location.assign("../insidelogin/insidelogin.html")
    }else{
        alert("Invalid Credentials")
    }

})