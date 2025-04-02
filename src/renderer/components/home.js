import { Button } from "../components/botaoHome.js"; // Importa o botão corretamente

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app"); // Seleciona a div onde o botão será inserido
    if (app) {
        app.innerHTML = Button(); // Insere o botão no HTML
    } else {
        console.error("Elemento #app não encontrado!");
    }
});