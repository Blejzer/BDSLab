function navigate(page) {
    document.getElementById('app').innerHTML = pages[page] || pages.home;
    window.location.hash = page;
}

function handleNavigationClick(event) {
    const target = event.target.closest('[data-page]');

    if (!target) {
        return;
    }

    event.preventDefault();
    navigate(target.dataset.page);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav').addEventListener('click', handleNavigationClick);

    const initialPage = window.location.hash.replace('#', '') || 'home';
    navigate(initialPage);
});