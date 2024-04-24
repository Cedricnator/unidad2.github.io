import { moveBall, shortcuts } from './teclado.js'
const d = document;

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})