const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const linksMenu = document.querySelectorAll(".menu a");


/* ==========================================================
                        MENU MOBILE
========================================================== */

botaoMenu.addEventListener("click", function () {
    const menuAberto = menu.classList.toggle("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);

    if (menuAberto) {
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    } else {
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }
});


/* ==========================================================
                FECHAR MENU AO CLICAR EM LINK
========================================================== */

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("ativo");

        botaoMenu.setAttribute(
            "aria-expanded",
            false
        );

        botaoMenu.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

});


/* ==========================================================
            FECHAR MENU AO AUMENTAR A TELA
========================================================== */

window.addEventListener("resize", function () {

    if (window.innerWidth > 700) {

        menu.classList.remove("ativo");

        botaoMenu.setAttribute(
            "aria-expanded",
            false
        );

        botaoMenu.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    }

});