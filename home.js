function changeBackgroundPalestras() {
    console.log('palestras');
    var main = document.querySelector('main');
    main.classList.add('background-palestras');
}

function changeBackgroundWorkshops() {
    console.log('workshops');
    var main = document.querySelector('main');
    main.classList.add('background-workshops');
}

function changeBackgroundDinamica() {
    console.log('dinamica');
    var main = document.querySelector('main');
    main.classList.add('background-dinamica');
}

function changeBackgroundMais() {
    console.log('mais');
    var main = document.querySelector('main');
    main.classList.add('background-mais');
}

function clearBackground() {
    console.log('remove');
    var main = document.querySelector('main');
    main.classList.add('.main');
    main.classList.remove('background-workshops', 'background-palestras', 'background-dinamica', 'background-mais');
}

