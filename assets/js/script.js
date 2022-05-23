//Script Javascript untuk membuat teks efek ketika/types
let i = 0, text;
text = "Bersatu Manggurebe Maju";
function types() {
    if(i < text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(types,80)
    }
}
types();

//Script Menu Responsive
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();