document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Toast sichtbar machen
    const toast = document.getElementById("toast");
    toast.classList.remove("hidden");
    toast.classList.add("visible");

    // Toast nach 3 Sekunden ausblenden
    setTimeout(() => {
        toast.classList.remove("visible");
        toast.classList.add("hidden");
    }, 3000);

    // Optional: Formular absenden
    this.submit();
});

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
