const projects = [
    { title: "Project 1", description: "Description of Project 1" },
    { title: "Project 2", description: "Description of Project 2" },
    // Add more projects as needed
];

const documents = [
    { title: "Document 1", link: "https://link-to-document1.com" },
    { title: "Document 2", link: "https://link-to-document2.com" },
    // Add more documents as needed
];

const projectsList = document.getElementById('projects-list');
const documentsList = document.getElementById('documents-list');

projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = `${project.title}: ${project.description}`;
    projectsList.appendChild(li);
});

documents.forEach(doc => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${doc.link}" target="_blank">${doc.title}</a>`;
    documentsList.appendChild(li);
});
