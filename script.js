// Toggle visibility of resource list
function toggleResources() {
    const list = document.getElementById("resourceList");
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

// Add a new resource dynamically
function addResource() {
    const newLink = prompt("Enter resource URL:");
    const newName = prompt("Enter resource name:");
    if (newLink && newName) {
        const list = document.getElementById("resourceList");
        const li = document.createElement("li");
        li.innerHTML = `<a href="${newLink}" target="_blank">${newName}</a>`;
        list.appendChild(li);
    } else {
        alert("Both name and URL are required!");
    }
}
