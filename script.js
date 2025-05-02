const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}


//agregar las tecnologias que domino
//AGREGAR OPCION AL ESPAÑOL
//agregar un hover sobre mi nombre mostrando nombre completo y tambien sobre los iconos de github, linkedin, etc y leetCode cuando este decente