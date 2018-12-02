function scrollFunction() {

    var header = document.querySelector('header');

    if (window.pageXOffset > 0) {
        header.classList.add("fixed-header");
    }
    else {
        header.classList.remove("fixed-header");
    }
}
