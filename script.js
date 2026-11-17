const distanceGuides = {
  5: { title: 'Comece com calma', copy: 'Alterne corrida leve e caminhada. O objetivo é criar o hábito, não correr rápido. Com consistência, os 5 km chegam.', meta: 'Sem pressa. Cada passo conta.' },
  15: { title: 'Dê tempo ao corpo', copy: 'Combine treinos leves com descanso e aumente o volume aos poucos. Uma base confortável ajuda a chegar aos 15 km com mais confiança.', meta: 'Consistência antes de velocidade.' },
  21: { title: 'Treine com estratégia', copy: 'A meia maratona pede semanas de preparação, corridas longas graduais, recuperação e atenção ao ritmo. Planeje com orientação profissional.', meta: 'Paciência também é treino.' },
  42: { title: 'Prepare cada detalhe', copy: 'A maratona é uma jornada de meses. Construa uma base sólida, progrida com cuidado e pratique sua estratégia de ritmo, hidratação e energia nos treinos.', meta: 'Respeite o processo.' }
};

const distanceCards = document.querySelectorAll('.distance-card');
const title = document.querySelector('#detail-title');
const copy = document.querySelector('#detail-copy');
const meta = document.querySelector('#detail-meta');

distanceCards.forEach((card) => {
  card.addEventListener('click', () => {
    const guide = distanceGuides[card.dataset.distance];
    distanceCards.forEach((item) => item.setAttribute('aria-pressed', String(item === card)));
    title.textContent = guide.title;
    copy.textContent = guide.copy;
    meta.textContent = guide.meta;
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  mainNav.classList.toggle('is-open', !isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    mainNav.classList.remove('is-open');
  });
});
