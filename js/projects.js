document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            name: "Projekt 1",
            description: "Ein Beispielprojekt, das ich während meiner Umschulung erstellt habe.",
            link: "https://github.com/christianlukowski/project1"
        },
        {
            name: "Projekt 2",
            description: "Ein weiteres Projekt mit Fokus auf Frontend-Entwicklung.",
            link: "https://github.com/christianlukowski/project2"
        },
    ];

    const projectSection = document.getElementById("projects");
    const projectList = document.createElement("ul");

    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <a href="${project.link}" target="_blank">${project.name}</a>
            - ${project.description}
        `;
        projectList.appendChild(listItem);
    });

    projectSection.appendChild(projectList);
});
