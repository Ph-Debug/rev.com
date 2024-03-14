// Melhoria na função scrollPage para ajustar a lógica do contato e portfólio
function scrollPage() {
  const sectionScroll = document.getElementById('sectionScroll');
  const scrollLeft = sectionScroll.scrollLeft;
  const windowWidth = window.innerWidth;

  // Altera a classe baseada na posição de rolagem
  document.getElementById('ul').className = scrollLeft <= 0.2 ? "" : "on-scroll";

  // Determina a seção ativa baseada na posição de rolagem
  const activeSection = Math.floor(scrollLeft / windowWidth);
  // Atualiza os IDs das seções para incluir portfólio e ajustar a ordem
  //const sectionIds = ['li-home', 'li-sobre', 'li-serviços', 'li-cases', 'li-contato'];
  const sectionIds = ['li-home', 'li-sobre', 'li-serviços', 'li-contato'];
  sectionIds.forEach((id, index) => {
      document.getElementById(id).className = index === activeSection ? "active" : "";
  });
}

// Função melhorada para adicionar comportamento de rolagem
function addScrollBehavior(targetId, deltaYMultiplier = -30) {
  const target = document.getElementById(targetId);
  target.addEventListener('wheel', (event) => {
      event.preventDefault();
      target.scrollBy({
          left: event.deltaY < 0 ? deltaYMultiplier : -deltaYMultiplier,
      });
  });
}

// Função simplificada para alternar seções de 'LiSobre', 'LiContato', e 'LiPortfólio'
function toggleAside(section) {
  const asideSections = {
      'sobre': { scrollPosition: 0, active: 'asideLiSobre' },
      'contato': { scrollPosition: 300, active: 'asideLiContato' }
  };
  
  if (asideSections[section]) {
      Object.keys(asideSections).forEach((key) => {
          document.getElementById(`asideLi${key.charAt(0).toUpperCase() + key.slice(1)}`).className = key === section ? "LiAtivo" : "";
      });
      document.getElementById('asideContato').scrollLeft = asideSections[section].scrollPosition;
  }
}

// Inicializa o comportamento de rolagem para 'sectionScroll'
addScrollBehavior('sectionScroll');
// Exemplo de como definir a seção ativa do aside
// Isso pode ser chamado em gatilhos ou eventos específicos
toggleAside('contato'); // Para ativar 'contato'
// toggleAside('sobre'); // Para ativar 'sobre'
// toggleAside('portfólio'); // Para ativar 'portfólio'
