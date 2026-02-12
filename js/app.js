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

function renderSections() {
    const sectionNodes = document.querySelectorAll('[data-section-content]');

    sectionNodes.forEach((node) => {
        const sectionName = node.dataset.sectionContent;
        node.innerHTML = getSectionTemplate(sectionName, currentLanguage);
    });

    setupContactForm();
}

function setActiveNavByHash(hash) {
    const activeHash = hash || '#home';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === activeHash;
        link.classList.toggle('is-active', isActive);
    });
}

function setupSectionObserver() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('visible', entry.isIntersecting);

            if (!entry.isIntersecting) {
                return;
            }

            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
        });
    }, { threshold: 0 });

    sections.forEach((section) => observer.observe(section));
}

function setupScrolledNavState() {
    const nav = document.getElementById('site-nav');

    const toggleNavState = () => {
        nav.classList.toggle('scrolled', window.scrollY > 24);
    };

    toggleNavState();
    window.addEventListener('scroll', toggleNavState, { passive: true });
}

function handleLanguageChange(event) {
    currentLanguage = event.target.value;
    updateNavigationLabels();
    updateLanguageDropdown();
    renderSections();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('language-select').addEventListener('change', handleLanguageChange);

    updateNavigationLabels();
    updateLanguageDropdown();
    renderSections();
    setupSectionObserver();
    setupScrolledNavState();

    setActiveNavByHash(window.location.hash);
});
