let name = prompt("Adınızı giriniz : ");
let myname = document.querySelector("#myName");
myname.innerHTML = `${name}`;

let clock = document.querySelector("myClock");

myClock.innerHTML = `${new Date()}`;
