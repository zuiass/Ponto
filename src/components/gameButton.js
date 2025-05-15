export function createGameButton({

    id,
    divClass,
    icon,
    idImg,
    imgClass,
    label

}) {

    const button = document.createElement("button");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");

    button.id = id;
    button.type = 'button';
    button.className = "game-button dark:border-button-stroke border-[1px] border-button-stroke/25 dark:bg-gradient-to-br dark:from-gameButton-midOne/90 dark:to-gameButton-midTwo bg-gradient-to-br from-white to-gray-300 opacity-0 scale-125 transition-all duration-700 ease-out flex flex-col rounded-3xl p-4 justify-between items-center w-32 h-32";

    div.className = `${divClass || "icon-container dark:bg-[#2D3C4F] bg-orange-500/10 transition-all 0.2s ease-in-out flex justify-center p-4 rounded-full w-14 h-14"}`;

    img.id = `${idImg || "icon-default"}`;
    img.src = icon;
    img.className = imgClass || '';

    title.className = "text-xl dark:text-yellow-500 text-black/80";
    title.textContent = label;

    div.appendChild(img);
    button.appendChild(div);
    button.appendChild(title);

    return button;
}

// U S I N G

const lineOne = document.querySelector("#line-one");
const lineTwo = document.querySelector("#line-two");

lineOne.appendChild(createGameButton({
    id: "pondeto",
    icon: "../assets/public/typeGame.svg",
    imgClass: "invert-0 brightness-0 dark:brightness-100 dark:invert-none",
    label: "Pondeto"
}));

lineOne.appendChild(createGameButton({
    id: "diario",
    icon: "../assets/public/typeGame.svg",
    imgClass: "invert-0 brightness-0 dark:brightness-100 dark:invert-none",
    label: "Diário"
}));

lineOne.appendChild(createGameButton({
    id: "ponteto",
    icon: "../assets/public/typeGame.svg",
    imgClass: "invert-0 brightness-0 dark:brightness-100 dark:invert-none",
    label: "Ponteto"
}));

lineTwo.appendChild(createGameButton({
    id: "history",
    icon: "../assets/public/history.svg",
    imgClass: "invert-0 brightness-0 dark:brightness-100 dark:invert-none",
    label: "Histórico"
}));

lineTwo.appendChild(createGameButton({
    id: "rank",
    icon: "../assets/public/rank.svg",
    imgClass: "invert-0 brightness-0 dark:brightness-100 dark:invert-none",
    label: "Ranking"
}));

lineTwo.appendChild(createGameButton({
    id: "settings",
    divClass: "icon-container flex justify-center rounded-full w-14 h-14 border-2 border-[#313E52] overflow-hidden p-0",
    imgClass: "object-cover w-full h-full",
    idImg: "icon-profile",
    icon: "../assets/public/fotoTeste.jpg",
    label: "Perfil"
}));