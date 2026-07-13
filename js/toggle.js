// Generic open/close toggle.
// Works for any button with class="toggle-trigger" and a
// data-toggle-target attribute naming which ancestor selector to toggle.
//
// Example:
//   <li>
//     <button class="toggle-trigger" data-toggle-target="li">...</button>
//     <ul class="sub-nav">...</ul>
//   </li>
//
//   <section class="collapsible-section">
//     <button class="toggle-trigger" data-toggle-target=".collapsible-section">...</button>
//     <div class="collapsible-content">...</div>
//   </section>

document.querySelectorAll('.toggle-trigger').forEach(function (button) {

  button.addEventListener('click', function (event) {
    event.preventDefault();

    const targetSelector = button.dataset.toggleTarget;
    const container = button.closest(targetSelector);
    const isNowOpen = container.classList.toggle('open');

    button.setAttribute('aria-expanded', isNowOpen);
  });

});