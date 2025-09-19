const hm = document.getElementById("hm");
const abt = document.getElementById("about");
const edu = document.getElementById("educ");
const exp = document.getElementById("exp");


function about(){
    hm.classList.remove("active");
    edu.classList.remove("active");
    exp.classList.remove("active");
    abt.classList.add("active");
}

function home(){
    abt.classList.remove("active");
    edu.classList.remove("active");
    exp.classList.remove("active");
    hm.classList.add("active");
}

function educ(){
    abt.classList.remove("active");
    hm.classList.remove("active");
    exp.classList.remove("active");
    edu.classList.add("active");
}

function expe(){
    abt.classList.remove("active");
    edu.classList.remove("active");
    hm.classList.remove("active");
    exp.classList.add("active");
}




  document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".hero-section");

    window.addEventListener("scroll", () => {
        if (window.scrollY > header.offsetHeight) {
            navbar.classList.add("show");
        } 
        else {
            navbar.classList.remove("show");
        }
    });
});