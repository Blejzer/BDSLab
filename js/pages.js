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
        contactEmailLabel: 'Email:'
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
        contactEmailLabel: 'E-pošta:'
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

          <p class="email">
            ${t.contactEmailLabel} <a href="mailto:nikola@bdslab.info">nikola@bdslab.info</a>
          </p>
                `
    };

    return pages[page] || pages.home;
}