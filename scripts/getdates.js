const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();
let lastModif = new Date(document.lastModified);

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
lastmodified.innerHTML = `${new Intl.DateTimeFormat("en-US",{dateStyle: "medium"}).format(lastModif)}</span>`;