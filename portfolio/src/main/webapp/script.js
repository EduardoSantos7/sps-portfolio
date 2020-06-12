/**
 * This function request JSON data to /data endpoint.
 * JSON data is displayed in the DOM.
 */
async function getData() {
    const response = await fetch("/data");
    const quote = await response.text();
    document.getElementById("showData").innerText = quote;
}