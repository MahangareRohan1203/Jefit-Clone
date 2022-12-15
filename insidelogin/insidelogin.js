let currentuser = JSON.parse(localStorage.getItem("current-user"))
let currName = currentuser.Username;

let title = document.querySelector("title")
title.innerText = currName

