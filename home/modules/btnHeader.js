var target = document.getElementById('sectionScroll');

// Função para navegar até a seção desejada
function navigateToSection(sectionIndex) {
    // Calcula a posição de rolagem com base no índice da seção
    target.scrollLeft = window.innerWidth * sectionIndex + 1;
}

// Funções para cada seção que chamam a função de navegação com o índice correto
function home() {
    navigateToSection(0);
}

function sobre() {
    navigateToSection(1);
}

function serviços() {
    navigateToSection(2);
}

function cases() {
    navigateToSection(3);
}

function contato() {
    navigateToSection(4);
}
