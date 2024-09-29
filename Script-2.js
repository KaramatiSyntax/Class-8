const loader = document.querySelector(".load");
const main = document.querySelector("main");

const lists = document.querySelectorAll(".list");
const indicator = document.querySelector("main nav ul span");
let desktop = window.matchMedia("(min-width: 1020px)")

window.addEventListener('load', ()=>{
  setTimeout(() =>{
    loader.className = "load hidden";
    if(desktop.matches){
      indicator.style.left = `none`
      indicator.style.top = `${lists[0].offsetTop + 17.5}px`
    }else{
      indicator.style.left = `${lists[0].offsetLeft - 5}px`;
    }
    setTimeout(() =>{
      loader.style.display = "none";
    }, 2500);
  }, 3000);
});

function activelink(){
  lists.forEach((item) => 
    item.classList.remove("active"));
    this.classList.add("active");
    if(desktop.matches){
      indicator.style.left = `none`
      indicator.style.top = `${this.offsetTop + 17.5}px`
    }else{
      indicator.style.left = `${this.offsetLeft - 5}px`;
    }
}
  lists.forEach((item) => 
  item.addEventListener('click', activelink));
