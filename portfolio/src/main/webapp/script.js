/**
 * This function request JSON data to /data endpoint.
 * JSON data is displayed in the DOM.
 */
async function getData() {
    const response = await fetch("/data");
    const data = await response.json();
    if (!data) return;

    data.forEach((comment) => {
        addComment(comment);
    });
}

function addComment(comment) {
    container = document.getElementById("showData");
    div = document.createElement("div");
    span = document.createElement("span");
    span.textContent = "Author: " + comment.author;
    text = document.createTextNode(comment.text);
    div.appendChild(span);
    div.appendChild(text);
    container.appendChild(div);
}