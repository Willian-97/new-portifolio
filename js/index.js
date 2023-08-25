// exibir idade atulizada
let date = new Date;
let data = date.getFullYear();
let idadeAtualizada = document.querySelector('#idade');
idadeAtualizada.innerHTML = data - 1997;

// funçao para exibir menu
let btn = document.getElementsByClassName('exibir-menu')[0];
let menu = document.getElementsByClassName('menu')[0];

btn.addEventListener('click', () => {
    menu.classList.toggle('visivel')
})

// foto 
let fotoComHover = document.getElementsByClassName('fotoPerfil')[0]
let invisivel = document.getElementsByClassName('dados-principais')[0]
fotoComHover.addEventListener('mouseenter', () => {
    invisivel.classList.add('invisivel')
    fotoComHover.classList.add('fotoCentralizada')

})
fotoComHover.addEventListener('mouseout', () => {
    invisivel.classList.remove('invisivel')
    fotoComHover.classList.remove('fotoCentralizada')
})

