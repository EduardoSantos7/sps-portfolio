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
    div.className = "card m-1";
    div.style = "width: 18rem;";
    body = document.createElement("div");
    body.className = "card-body";
    title = document.createElement("h5");
    title.className = "card-title";
    title.innerHTML = comment.author;
    subTitle = document.createElement("h5");
    subTitle.className = "card-subtitle mb-2 text-muted";
    var date = new Date(comment.timestamp);
    subTitle.innerHTML = date.toLocaleString();
    p = document.createElement("p");
    p.className = "card-text";
    p.innerHTML = comment.text;

    body.appendChild(title);
    body.appendChild(subTitle);
    body.appendChild(subTitle);
    body.appendChild(p);
    div.appendChild(body);
    container.appendChild(div);
}