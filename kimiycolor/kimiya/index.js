const input = document.getElementById("inpu");
const button = document.getElementById("button");
const body = document.getElementsByTagName("body")[0];


button.addEventListener("click", () => {
    body.style.backgroundColor = input.value;
});


