let currentMode = 'light';
let modeButton = document.querySelector('#modeButton')
let grassButton = document.querySelector('#grass')
let woodButton = document.querySelector('#wood')
let stoneButton = document.querySelector('#stone')
let text = document.getElementsByClassName('text')
let buttons = document.getElementsByClassName('buttons')

modeButton.onclick = changeStyleMode;
grassButton.onclick = function () {window.open('https://store.kowantify.com/checkout/add/1');}
woodButton.onclick = function () {window.open('https://store.kowantify.com/checkout/add/2');}
stoneButton.onclick = function () {window.open('https://store.kowantify.com/checkout/add/3');}

function changeStyleMode() {
    if (currentMode === 'dark'){
        document.body.style.background = "#ffffff";
        currentMode = "light";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#000000";
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = "#646464";
            buttons[i].style.color = "#ffffff";
        }
    }
    else if (currentMode === 'light') {
        currentMode = 'dark';
        document.body.style.background = "#27252a";
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "#ffffff";
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.background = "#ffffff";
            buttons[i].style.color = "#000000";
        }
    }
}
woodButton.addEventListener('mouseover', () => {
});
woodButton.addEventListener('mouseout', () => {
});
stoneButton.addEventListener('mouseover', () => {
});
stoneButton.addEventListener('mouseout', () => {
});

