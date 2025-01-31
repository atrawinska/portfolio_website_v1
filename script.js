function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function () {
    // Replace with the actual path to your JSON file
    const jsonUrl = "projects_list.json"; 

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => displayProjects(data))
        .catch(error => console.error("Error loading projects:", error));

    function displayProjects(projects) {
        const container = document.getElementById("projects-container");

        projects.forEach(project => {
            // Create a new div for the project
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("project-card");

            // Insert project content
            projectDiv.innerHTML = `
            <div class="single-project-container">
                <img src="${project.image}" alt="${project.title}" class="project-image" style="width:100%">
                <h3 class="project_title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.link}" target="_blank"><button class="project-link-button">View Project</button></a>
            </div>
            
                
            `;

            // Append the project to the container
            container.appendChild(projectDiv);
        });
    }
});
