const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".btn-burger");
    const navLinks = document.querySelectorAll(".btn-burger buttons");

    burger.addEventListener("click", () => {
        nav.classList.toggle(".mostrar")
    });

}

navSlide ();


