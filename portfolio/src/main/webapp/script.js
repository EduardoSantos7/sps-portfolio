async function getData() {
    const response = await fetch("/data");
    const quote = await response.json();
    document.getElementById("showData").innerText = quote;
}