const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document and display it in the paragraph with id "lastModified"
let oLastModif = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last Modified: ${oLastModif}`;