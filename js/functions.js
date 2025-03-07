const categoriesMenuButton = document.querySelectorAll(".categories-menu-button");

categoriesMenuButton.forEach(button => {
    button.addEventListener("touchstart", () => {
        button.classList.add("hover");
    });

    button.addEventListener("touchend", () => {
        button.classList.remove("hover");
    });
});

const viewDescriptionButton = document.querySelectorAll(".to-open");


viewDescriptionButton.forEach(button => {
    const buttonCardParent = button.parentElement;
    const buttonDescription = buttonCardParent.children[3];
    const hideDescriptionButton = buttonCardParent.children[5];

    button.addEventListener("touchstart", () => {
        button.classList.add("hover");
    });

    button.addEventListener("touchend", () => {
        button.classList.remove("hover");
    });

    hideDescriptionButton.addEventListener("touchstart", () => {
        hideDescriptionButton.classList.add("hover");
    });

    hideDescriptionButton.addEventListener("touchend", () => {
        hideDescriptionButton.classList.remove("hover");
    });

    button.addEventListener("click", () => {
        viewDescriptionButton.forEach(otherButton => {
            if (otherButton !== button) {
                const otherButtonCardParent = otherButton.parentElement;
                const otherButtonDescription = otherButtonCardParent.children[3];
                const otherHideDescriptionButton = otherButtonCardParent.children[5];

                // Cerramos la descripción del otro botón
                otherButtonDescription.style.height = "0";
                otherButton.classList.remove("view-description");
                otherButtonDescription.classList.remove("view-description");
                otherHideDescriptionButton.classList.remove("view-description");
            }
        });

        // Establecemos la altura de la descripción en su altura natural (al abrir)
        const descriptionHeight = buttonDescription.scrollHeight;
        buttonDescription.style.height = `${descriptionHeight}px`; // Establecemos la altura dinámica (Usando concatenacion template literals de ES6)

        button.classList.add("view-description");
        buttonDescription.classList.add("view-description");
        hideDescriptionButton.classList.add("view-description");
    });

    hideDescriptionButton.addEventListener("click", () => {
        // Cuando cerramos, establecemos la altura a 0 para que se cierre con animación
        buttonDescription.style.height = "0";

        button.classList.remove("view-description");
        buttonDescription.classList.remove("view-description");
        hideDescriptionButton.classList.remove("view-description");
    });
});