let data = JSON.parse(localStorage.getItem("SignInData")) || [];




let btn = document.getElementById("button")
btn.addEventListener("click",()=>{
    data = JSON.parse(localStorage.getItem("SignInData")) || [];
    let email = document.getElementById("email")
    let pass1 = document.getElementById("password1");
    let pass2 = document.getElementById("password2");
    let username=document.getElementById("username");



    let Email = email.value;
    let Pass1 = pass1.value;
    let Pass2 = pass2.value;
    let Username = username.value;
    let flag = false ;
    data.forEach((element)=>{
        if(element.Email == Email){
            flag = true;
        }

    })
    if(flag == true){
        alert("Email Already exists")
    }else if(Pass1!=Pass2){
        alert("Check both passwords.")
    }else{
        let obj={Email,Pass1,Username};
        data.push(obj)
        localStorage.setItem("SignInData",JSON.stringify(data))
        alert("Sign-In Successful. Login to your Account")
    }

})