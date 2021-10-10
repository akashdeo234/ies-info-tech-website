// nav bar function

let menu  = document.querySelector(".nav_group");

let handburger = document.querySelector(".handburger");




handburger.addEventListener('click',()=>{
    menu.classList.toggle(
        "open"
    )

})