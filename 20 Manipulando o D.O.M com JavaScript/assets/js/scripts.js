// Seleção dos elementos:

function changeMode() {
    changeClasses(); // Muda as classes
    changeText(); // Muda os textos
}

function changeClasses() {
    // Muda as classes dos elementos

    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    // Muda os textos dos elementos
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if (body.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON"
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON"; 
}


const darkModeClass = 'dark-mode'
const button = document.getElementById("mode-selector"); //seleção do botão do html pelo seu id
const h1 = document.getElementById("page-title"); // selação do h1 pelo seu id
const body = document.getElementsByTagName('body')[0]; // seleção do body pelo primeiro índice (já que ele retorna um array)
const footer = document.getElementsByTagName('footer')[0]; // seleção do footer pelo primeiro índice (já que ele retorna um array)

//console.log(button) verificando se a seleção deu certo (no navegador)

button.addEventListener('click', changeMode) //Adicionando uma função ao clique do botão
