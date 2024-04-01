window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// document.getElementById("smk").style.display = "block";
// document.getElementById("kuliah").style.display = "none";
// document.querySelector(".N-smk").classList.add("active");
// document.querySelector(".N-kuliah").classList.remove("active");
// function navigation(id) {
//     if (id === "smk") {
//         document.getElementById("smk").style.display = "block";
//         document.getElementById("kuliah").style.display = "none";
//         document.querySelector(".N-smk").classList.add("active");
//         document.querySelector(".N-kuliah").classList.remove("active");
//     } else if (id === "kuliah") {
//         document.getElementById("smk").style.display = "none";
//         document.getElementById("kuliah").style.display = "block";
//         document.querySelector(".N-smk").classList.add("active");
//         document.querySelector(".N-kuliah").classList.remove("active");
//     }
// }
