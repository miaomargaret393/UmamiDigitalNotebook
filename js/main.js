// entry toggle 
document.querySelectorAll('.entry-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
  });
});

// tag filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const entries = document.querySelectorAll('.entry');
const introTexts = document.querySelectorAll('.intro-text');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    entries.forEach(entry => {
      const tags = entry.dataset.tags.split(' ');
      const show = filter === 'all' || tags.includes(filter);
      entry.classList.toggle('hidden', !show);
    });

    introTexts.forEach(p => {
      p.hidden = p.dataset.intro !== filter;
    });
  });
});