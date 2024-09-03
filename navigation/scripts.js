const projectsDisplay = document.getElementById("project-cards");

const projectCards = [
    {
        title: "Mobile Panini",
        image: "./assets/panini-preview.png",
        dir: "../1_Mobile_Panini/index.html",
        description: `The first assignment for my University web development course. We were 
            tasked with creating a simple static webpage for a fictional restaurant called 
            Mobile Panini. The project originates from the "New Perspectives on HTML5 and CSS3, 
            7th Edition" textbook. The image used in this assignment was acquired from 
            <i>unsplash.com</i>!`
    }
];

const renderProjectCards = () => {
    const projectCardHTML = projectCards.map((object) => {
        const localID = object.title.split(" ").join("-").toLowerCase();
        return `
            <a id="${localID}" href="${object.dir}" class="project-card">
                <h2 aria-label="${object.title}">${object.title}</h2>
                <img src=${object.image} alt="${localID}-preview" loading="lazy">
                <p area-label="${localID}-description">${object.description}</p>
            </a>
        `;
    }).join("");

    projectsDisplay.innerHTML = projectCardHTML;
};

renderProjectCards();