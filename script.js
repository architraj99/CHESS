"use strict";

const boardElement = document.getElementById("board");
const turnElement = document.getElementById("turn");
const fileLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

function squareKey(x, y) {
    return `${x}_${y}`;
}

function buildBoard() {
    boardElement.innerHTML = "";

    for(let y = 8; y >= 1; y -= 1) {
        const rank = document.createElement("div");
        rank.className = "cellprefix";
        rank.textContent = String(y);
        boardElement.appendChild(rank);

        for(let x = 1; x <= 8; x += 1) {
            const cell = document.createElement("button");
            cell.type = "button";
            cell.className = `gamecell ${(x + y) % 2 === 0 ? "grey" : ""}`.trim();

            cell.id = squareKey(x, y);
            cell.dataset.x = String(x);
            cell.dataset.y = String(y);
            cell.setAttribute("aria-label", `${fileLetters[x - 1]}${y}`);
            boardElement.appendChild(cell);
        }
    }

    const corner = document.createElement("div");
    corner.className = "cellprefix";
    boardElement.appendChild(corner);

    fileLetters.forEach((letter) => {
        const file = document.createElement("div");
        file.className = "cellprefix";
        file.textContent = letter;
        boardElement.appendChild(file);
    });
}

buildBoard();