const translations = {
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navContact: 'Contact',
        homeTitle: 'Business Decision Systems',
        homeIntroOne: 'BDS Lab designs and advises on automation and AI-supported decision systems for organizations operating in complex, regulated, and high-responsibility environments.',
        homeIntroTwo: 'We focus on strengthening decision-making through well-designed systems, clear responsibilities, and explainable logic — not black-box automation.',
        homeSectionTitle: 'What We Work On',
        homePillarOneTitle: 'Decision Support Systems',
        homePillarOneBody: 'Analytical and AI-assisted tools that support human judgment, accountability, and governance.',
        homePillarTwoTitle: 'Applied Automation',
        homePillarTwoBody: 'Hybrid human–machine systems and process automation that improve efficiency without disrupting operations.',
        homePillarThreeTitle: 'Phased & Safe Adoption',
        homePillarThreeBody: 'Incremental approaches that reduce risk, support compliance, and allow capabilities to mature over time.',
        aboutTitle: 'About BDS Lab',
        aboutBodyOne: 'BDS Lab is a newly established organization built on years of hands-on experience in the analysis and implementation of automation and AI-supported systems.',
        aboutBodyTwo: 'While the company itself is new, its work is grounded in more than five years of practical involvement in designing, deploying, and advising on analytical and AI tools in real operational environments.',
        aboutBodyThree: 'Our background spans decision support systems, applied analytics, and phased automation, with a strong emphasis on accountability and governance.',
        contactTitle: 'Contact',
        contactBody: 'For inquiries related to automation, analytics, or AI-supported decision systems, feel free to get in touch.',
        contactEmailLabel: 'Email:',
        contactLocationsTitle: 'Office Locations',
        contactAddressBiHTitle: 'Bosnia and Herzegovina',
        contactAddressBiHStreet: 'Behaudina Selmanovica 1, Sarajevo',
        contactAddressCroatiaTitle: 'Croatia',
        contactAddressCroatiaStreet: 'Okucanska 17, Zagreb',
        contactFormTitle: 'Send us a message',
        contactNameLabel: 'Full name',
        contactNamePlaceholder: 'Your name',
        contactEmailFormLabel: 'Email address',
        contactEmailPlaceholder: 'you@example.com',
        contactSubjectLabel: 'Subject',
        contactSubjectPlaceholder: 'How can we help?',
        contactMessageLabel: 'Message',
        contactMessagePlaceholder: 'Tell us about your project or inquiry.',
        contactSubmit: 'Send message',
        contactSending: 'Sending…',
        contactSuccess: 'Thanks for reaching out. Your message has been sent successfully.',
        contactError: 'Sorry, there was a problem sending your message. Please try again or email us directly.',
        contactFallback: 'If the problem continues, use your email app with a prefilled draft.'
    },
    hr: {
        navHome: 'Početna',
        navAbout: 'O nama',
        navContact: 'Kontakt',
        homeTitle: 'Sustavi poslovnog odlučivanja',
        homeIntroOne: 'BDS Lab osmišljava i savjetuje o automatizaciji i AI-potpomognutim sustavima odlučivanja za organizacije koje djeluju u složenim, reguliranim i visokoodgovornim okruženjima.',
        homeIntroTwo: 'Usmjereni smo na jačanje procesa odlučivanja kroz dobro oblikovane sustave, jasne odgovornosti i objašnjivu logiku — a ne automatizaciju crne kutije.',
        homeSectionTitle: 'Na čemu radimo',
        homePillarOneTitle: 'Sustavi za podršku odlučivanju',
        homePillarOneBody: 'Analitički i AI-potpomognuti alati koji podupiru ljudsku prosudbu, odgovornost i upravljanje.',
        homePillarTwoTitle: 'Primijenjena automatizacija',
        homePillarTwoBody: 'Hibridni sustavi čovjek–stroj i automatizacija procesa koji povećavaju učinkovitost bez narušavanja operativnog rada.',
        homePillarThreeTitle: 'Fazno i sigurno uvođenje',
        homePillarThreeBody: 'Postupni pristupi koji smanjuju rizik, podupiru usklađenost i omogućuju sazrijevanje sposobnosti kroz vrijeme.',
        aboutTitle: 'O BDS Labu',
        aboutBodyOne: 'BDS Lab je novoosnovana organizacija izgrađena na godinama praktičnog iskustva u analizi i implementaciji automatizacijskih i AI-potpomognutih sustava.',
        aboutBodyTwo: 'Iako je tvrtka nova, njezin se rad temelji na više od pet godina praktičnog sudjelovanja u projektiranju, implementaciji i savjetovanju o analitičkim i AI alatima u stvarnim operativnim okruženjima.',
        aboutBodyThree: 'Naše iskustvo obuhvaća sustave za podršku odlučivanju, primijenjenu analitiku i faznu automatizaciju, uz snažan naglasak na odgovornosti i upravljanju.',
        contactTitle: 'Kontakt',
        contactBody: 'Za upite vezane uz automatizaciju, analitiku ili AI-potpomognute sustave odlučivanja, slobodno nam se javite.',
        contactEmailLabel: 'E-pošta:',
        contactLocationsTitle: 'Lokacije ureda',
        contactAddressBiHTitle: 'Bosna i Hercegovina',
        contactAddressBiHStreet: 'Behaudina Selmanovica 1, Sarajevo',
        contactAddressCroatiaTitle: 'Hrvatska',
        contactAddressCroatiaStreet: 'Okucanska 17, Zagreb',
        contactFormTitle: 'Pošaljite nam poruku',
        contactNameLabel: 'Ime i prezime',
        contactNamePlaceholder: 'Vaše ime',
        contactEmailFormLabel: 'Adresa e-pošte',
        contactEmailPlaceholder: 'vi@primjer.com',
        contactSubjectLabel: 'Naslov',
        contactSubjectPlaceholder: 'Kako vam možemo pomoći?',
        contactMessageLabel: 'Poruka',
        contactMessagePlaceholder: 'Opišite svoj projekt ili upit.',
        contactSubmit: 'Pošalji poruku',
        contactSending: 'Slanje…',
        contactSuccess: 'Hvala na javljanju. Vaša poruka je uspješno poslana.',
        contactError: 'Došlo je do pogreške pri slanju poruke. Pokušajte ponovno ili nas kontaktirajte e-poštom.',
        contactFallback: 'Ako se problem nastavi, upotrijebite svoju e-poštu s unaprijed pripremljenom porukom.'
    }
};

function getPageTemplate(page, language) {
    const t = translations[language] || translations.en;

    const pages = {
        home: `
          <h1><img src="images/bdslab-grid.svg" alt="BDS Lab" height="30"> ${t.homeTitle}</h1>

          <p>${t.homeIntroOne}</p>

          <p>${t.homeIntroTwo}</p>

          <h2>${t.homeSectionTitle}</h2>

          <div class="pillars">
            <div class="pillar">
              <h3>${t.homePillarOneTitle}</h3>
              <p>${t.homePillarOneBody}</p>
            </div>

            <div class="pillar">
              <h3>${t.homePillarTwoTitle}</h3>
              <p>${t.homePillarTwoBody}</p>
            </div>


             <div class="pillar">
              <h3>${t.homePillarThreeTitle}</h3>
              <p>${t.homePillarThreeBody}</p>
            </div>
          </div>
        `,

        about: `
          <h1><img src="images/bdslab-grid.svg" alt="BDS Lab" height="30"> ${t.aboutTitle}</h1>

          <p>${t.aboutBodyOne}</p>

          <p>${t.aboutBodyTwo}</p>

          <p>${t.aboutBodyThree}</p>
        `,

        contact: `
          <h1><img src="images/bdslab-grid.svg" alt="BDS Lab" height="30"> ${t.contactTitle}</h1>

          <p>${t.contactBody}</p>

          <div class="contact-grid">
            <section class="contact-details" aria-label="${t.contactLocationsTitle}">
              <p class="email">
                ${t.contactEmailLabel} <a href="mailto:nikola@bdslab.info">nikola@bdslab.info</a>
              </p>

              <h2>${t.contactLocationsTitle}</h2>

              <ul class="location-list">
                <li class="address-card">
                  <h3>${t.contactAddressBiHTitle}</h3>
                  <p>${t.contactAddressBiHStreet}</p>
                  <p><a href="tel:+38765318453">+387 65 318 453</a></p>
                </li>

                <li class="address-card">
                  <h3>${t.contactAddressCroatiaTitle}</h3>
                  <p>${t.contactAddressCroatiaStreet}</p>
                  <p><a href="tel:+385923598579">+385 92 359 8579</a></p>
                </li>
              </ul>
            </section>

            <section class="contact-form-wrap">
              <h2>${t.contactFormTitle}</h2>

              <form id="contact-form" novalidate>
                <label for="name">${t.contactNameLabel}</label>
                <input id="name" name="name" type="text" placeholder="${t.contactNamePlaceholder}" required autocomplete="name">

                <label for="email">${t.contactEmailFormLabel}</label>
                <input id="email" name="email" type="email" placeholder="${t.contactEmailPlaceholder}" required autocomplete="email">

                <label for="subject">${t.contactSubjectLabel}</label>
                <input id="subject" name="subject" type="text" placeholder="${t.contactSubjectPlaceholder}" required>

                <label for="message">${t.contactMessageLabel}</label>
                <textarea id="message" name="message" rows="5" placeholder="${t.contactMessagePlaceholder}" required></textarea>

                <button type="submit" id="contact-submit-btn">${t.contactSubmit}</button>
                <p id="contact-form-status" role="status" aria-live="polite"></p>
              </form>
            </section>
          </div>
        `
    };

    return pages[page] || pages.home;
}
