document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menuItem");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    });

});

document.querySelectorAll(".project[data-modal]").forEach((project) => {
  project.addEventListener("click", () => {
    const modal = document.getElementById(project.dataset.modal);
    modal?.showModal();
  });
});

document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("dialog")?.close();
  });
});