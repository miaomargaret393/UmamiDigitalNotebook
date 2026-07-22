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

// expand entry from URL hash (e.g. projects.html#gsrc-designs)
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetEntry = document.getElementById(targetId);

    if (targetEntry) {
      const toggleBtn = targetEntry.querySelector('.entry-toggle');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'true');
      }

      // scroll into view after the expand transition finishes
      setTimeout(() => {
        targetEntry.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
});