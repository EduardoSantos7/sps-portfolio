async function getData() {
    const response = await fetch("/data");
    const quote = await response.text();
    document.getElementById("showData").innerText = quote;
}