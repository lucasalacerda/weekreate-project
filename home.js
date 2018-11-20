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

function clearBackground() {
    console.log('workshops');
    var main = document.querySelector('main');
    main.classList.add('.main');
    main.classList.remove('background-workshops', 'background-palestras');
}

