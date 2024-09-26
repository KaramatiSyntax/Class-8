const loader = document.querySelector(".load");
const main = document.querySelector("main");

window.addEventListener('load', ()=>{
  setTimeout(() =>{
    loader.className = "load hidden";
    setTimeout(() =>{
      loader.style.display = "none";
    }, 2500);
  }, 3000);
});

const lists = document.querySelectorAll(".list");

function activelink(){
  lists.forEach((item) => 
    item.classList.remove("active"));
    this.classList.add("active");
}
  lists.forEach((item) => 
  item.addEventListener('click', activelink));

 