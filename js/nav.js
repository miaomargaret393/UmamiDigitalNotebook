// Finds every toggle button (the little ▾ arrows in the nav)
// and makes clicking/tapping it open or close its sub-menu.
document.querySelectorAll('.nav-toggle').forEach(function (button) {

  button.addEventListener('click', function (event) {
    // Stop the click from doing anything else (like following a link)
    event.preventDefault();

    // .closest('li') walks up from the button to find its parent <li>
    const parentItem = button.closest('li');

    // .toggle('open') adds the class if it's missing, removes it if present,
    // and tells us which one just happened (true = now open)
    const isNowOpen = parentItem.classList.toggle('open');

    // Keep the button's accessibility state in sync with what's visible
    button.setAttribute('aria-expanded', isNowOpen);
  });

});

