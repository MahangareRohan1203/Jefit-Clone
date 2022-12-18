let currentuser = JSON.parse(localStorage.getItem("current-user"))
let currName = currentuser.Username;
let friends = JSON.parse(localStorage.getItem("friends")) || []

let title = document.querySelector("title")
title.innerText = currName

let images =["https://www.jefit.com/assets/customavatars/avatar2540179_1.gif","https://www.jefit.com/images/unknown.gif","https://www.jefit.com/assets/customavatars/avatar2806812_2.gif","https://www.jefit.com/assets/customavatars/avatar4869559_3.gif","https://www.jefit.com/assets/customavatars/avatar4869559_3.gif","https://www.jefit.com/images/unknown.gif"]

let names = ["lefler","huffster316","snowboardlady72","brain1684","James.m.bushong","bhornbecker"]

let container = document.getElementById("container");
let activeuser = document.getElementById("activeusers")
let k=1;
for(let j=0;j<9;j++){
for(let i=0;i<images.length;i++){
    let div = document.createElement("div");
    
    div.setAttribute("class","cup");

    let image = document.createElement("img");
    image.setAttribute("src",images[i]);
    let name = document.createElement("h6");
    name.innerText = names[i];
    let profile = document.createElement("h6");
    profile.innerText = "featured community Member";
    let button = document.createElement("button");
    button.innerText = "Add";
    button.addEventListener("click",()=>{
        alert("Added")
        friends.push({image:images[i],Name:names[i]})
        localStorage.setItem("friends",JSON.stringify(friends))
    })
    div.append(image,name,profile,button);
    container.append(div)

}

}
for(let i=0;i<9;i++){
      // For active users
  if(k<=9){
    let d = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", images[i%6]);
    let n = document.createElement("h6");
    n.innerText = names[i%6];
    d.append(img,n);
    activeuser.append(d);
    k++;
}
}

