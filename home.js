function changeBackgroundPalestras() {
    console.log('palestras');
    var main = document.querySelector('div#main');
    main.classList.add('background-palestras');
}

function changeBackgroundWorkshops() {
    console.log('workshops');
    var main = document.querySelector("div#main");
    main.classList.add('background-workshops');
}

function changeBackgroundDinamica() {
    console.log('dinamica');
    var main = document.querySelector('div#main');
    main.classList.add('background-dinamica');
}

function changeBackgroundMais() {
    console.log('mais');
    var main = document.querySelector('div#main');
    main.classList.add('background-mais');
}

function clearBackground() {
    console.log('remove');
    var main = document.querySelector("div#main");
    main.classList.remove('background-workshops', 'background-palestras', 'background-dinamica', 'background-mais');
}

function setUnderline() {
    
}

function onMouseOver(e) {
    var timeout;
    e.preventDefault();

    var list = document.querySelector('#lista');
    var meioLista = (window.innerWidth / 2);
    var x = e.clientX;

    if (x < (meioLista)) {
        list.scroll(-4000, 0);

    } else if (x > (meioLista)) {
        list.scroll(4000, 0);
    }

}

