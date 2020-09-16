import { url } from "./constants/api.js";
import createHtml from "./components/createHtml.js"
import createTags from "./components/createTags.js"

const resultContainer = document.querySelector(".result-container");


async function callApi() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        createHtml(json.data);
    } catch (error) {
        console.log(error);
        resultContainer.innerHTML = displayMessage("error", error);
    }
}

callApi();

function displayMessage(type, message) {
    return `<div class="message ${type}">${message}</div>`;
}





