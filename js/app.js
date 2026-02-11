let currentLanguage = 'en';

function updateNavigationLabels() {
    const navItems = document.querySelectorAll('nav [data-key]');
    const t = translations[currentLanguage] || translations.en;

    navItems.forEach((item) => {
        const key = item.dataset.key;

        if (t[key]) {
            item.textContent = t[key];
        }
    });
}

function updateLanguageDropdown() {
    const languageSelect = document.getElementById('language-select');
    languageSelect.value = currentLanguage;
}

function navigate(page) {
    document.getElementById('app').innerHTML = getPageTemplate(page, currentLanguage);
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

function handleLanguageChange(event) {
    currentLanguage = event.target.value;
    updateNavigationLabels();
    updateLanguageDropdown();

    const currentPage = window.location.hash.replace('#', '') || 'home';
    navigate(currentPage);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav').addEventListener('click', handleNavigationClick);
    document.getElementById('language-select').addEventListener('change', handleLanguageChange);

    const initialPage = window.location.hash.replace('#', '') || 'home';

    updateNavigationLabels();
    updateLanguageDropdown();
    navigate(initialPage);
});