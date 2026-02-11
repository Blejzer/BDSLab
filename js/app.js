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

function createMailtoLink(formData) {
    const subject = formData.get('subject') || '';
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        message
    ];

    const params = new URLSearchParams({
        subject,
        body: bodyLines.join('\n')
    });

    return `mailto:nikola@bdslab.info?${params.toString()}`;
}

async function handleContactFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = document.getElementById('contact-submit-btn');
    const statusNode = document.getElementById('contact-form-status');
    const t = translations[currentLanguage] || translations.en;

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const formData = new FormData(form);

    formData.append('_subject', formData.get('subject'));
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    submitButton.disabled = true;
    submitButton.textContent = t.contactSending;
    statusNode.textContent = '';
    statusNode.className = '';

    try {
        const response = await fetch('https://formsubmit.co/ajax/nikola@bdslab.info', {
            method: 'POST',
            headers: {
                Accept: 'application/json'
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        statusNode.textContent = t.contactSuccess;
        statusNode.className = 'status-success';
        form.reset();
    } catch (error) {
        const fallbackLink = createMailtoLink(formData);
        statusNode.innerHTML = '';

        const errorText = document.createElement('span');
        errorText.textContent = `${t.contactError} `;

        const fallbackAnchor = document.createElement('a');
        fallbackAnchor.href = fallbackLink;
        fallbackAnchor.textContent = t.contactFallback;

        statusNode.append(errorText, fallbackAnchor);
        statusNode.className = 'status-error';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = t.contactSubmit;
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) {
        return;
    }

    form.addEventListener('submit', handleContactFormSubmit);
}

function navigate(page) {
    document.getElementById('app').innerHTML = getPageTemplate(page, currentLanguage);
    window.location.hash = page;
    setupContactForm();
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
