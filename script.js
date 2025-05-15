const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

//AGREGAR OPCION AL ESPAÑOL