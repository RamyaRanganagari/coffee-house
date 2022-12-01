const tagButton = document.getElementsByClassName('button')[0]
const navBar = document.getElementsByClassName('navbar-links')[0]

tagButton.addEventListener('click', ()=>{
    navBar.classList.toggle('active')
})