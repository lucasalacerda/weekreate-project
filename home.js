function onMouseOver(e){
    var list = document.querySelector('#lista');
    console.log(list);
    var meioLista = (list.width / 2);
    console.log(meioLista);

    const x = e.clientX;
    const y = e.clientY;

    if (x < meioLista){
        console.log('esquerda');
    }
    else {
        console.log('direita');
    }
}
