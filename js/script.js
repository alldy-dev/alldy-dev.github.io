//Elements
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header-nav');

//Event Listener for Menu button click
menuButton.addEventListener('click', () => {
    header.classList.toggle('menu-open');

    const isOpen = header.classList.contains('menu-open');
    if (isOpen) {
        menuButton.setAttribute('aria-label', 'Fechar menu');
    } else {
        menuButton.setAttribute('aria-label', 'Abrir menu');
    }

});

//Close menu when a link is clicked
const menuLinks = document.querySelectorAll('.header-link');

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        header.classList.remove('menu-open');
        menuButton.setAttribute('aria-label', 'Abrir menu');
    });
});

// ---------------------- Start Theme button ----------------------
// Theme button element
const themeButton = document.querySelector('.theme-button');

//Load the saved theme
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

//Toggle the class and save the theme on click
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    //Save the chosen theme
    const isLight = document.body.classList.contains('light-theme');

    if (isLight) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
// ---------------------- End Theme button ----------------------



// ---------------------- Start Language ----------------------

//Language objects
const translations = {
    pt: {
        //Barra de navegação
        'nav.about': 'Sobre',
        'nav.technology': 'Tecnologias',
        'nav.experience': 'Experiências',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',

        //Apresentando-me
        'hero.greeting': 'Olá, Eu sou',
        'hero.role': 'Desenvolvedor · JavaScript, HTML, CSS, Python e SQL',
        'hero.text': 'Construo dashboards e interfaces web e transformo dados em informação útil',
        'hero.projects': 'Ver projetos',
        'hero.cv': 'Baixar CV',

        //Sobre mim
        'about.title': 'Sobre mim',
        'about.text_01': 'Sou engenheiro de telecomunicações, com MBA em Gerenciamento de Projetos pela FGV e mais de 10 anos de experiência em tecnologia.',
        'about.text_02': 'Hoje, na Sankhya, desenvolvo relatórios em SQL e dashboards web para clientes de ERP, e participo da implantação do sistema, do levantamento de requisitos à entrega.',
        'about.text_03': 'Gosto de transformar dados em informação útil e de conversar com clientes para entender o que eles realmente precisam. Falo português, inglês e espanhol fluentemente.',

        //Tecnologias
        'knowledge.technologies_01': 'Tecnologias',
        'knowledge.technologies_02': 'Dados',
        'knowledge.technologies_03': 'Ferramentas',
        'knowledge.technologies_04': 'Git e GitHub',

        //Experiências
        'experience.text_01': 'Experiências',
        'experience.text_02': '2026 — atual',
        'experience.text_03': 'Analista de Implantação',
        'experience.text_04': 'Relatórios em SQL (Oracle) e dashboards web com HTML, CSS e JavaScript para clientes de ERP.',
        'experience.text_05': 'Analista de Redes',
        'experience.text_06': 'Stefanini (cliente Vale)',
        'experience.text_07': 'Interfaces web, automações em Python e dashboards no Grafana para ferramentas de monitoramento.',
        'experience.text_08': 'Nokia (cliente TIM)',
        'experience.text_09': 'Relatórios dos testes de campo das redes 2G, 3G e 4G.',

        //Projetos
        'projects.text_01': 'Projetos',
        'projects.text_02': 'Portfólio pessoal',
        'projects.text_03': 'Este site. Feito com HTML, CSS e JavaScript puros, responsivo e com menu mobile.',
        'projects.text_04': 'Ver código',
        'projects.text_05': 'Em breve',
        'projects.text_06': 'Novos projetos em desenvolvimento.',

        //Contatos
        'contact.text_01': 'Contato',
        'contact.text_02': 'Estou disponível a vagas de desenvolvimento e de dados.',

        //Rodapé
        'footer.text_01': 'Feito com HTML, CSS e JavaScript',
        'footer.text_02': '© 2026 Allan Dymitri · Brasil'
    },
    es: {
        //Barra de navegación
        'nav.about': 'Sobre mí',
        'nav.technology': 'Tecnologías',
        'nav.experience': 'Experiencias',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',

        //Presentarme
        'hero.greeting': 'Hola, yo soy',
        'hero.role': 'Desarrollador · JavaScript, HTML, CSS, Python y SQL',
        'hero.text': 'Construyo dashboards e interfaces web, y transformo datos en información útil',
        'hero.projects': 'Ver proyectos',
        'hero.cv': 'Descargar CV',

        //Sobre mí
        'about.title': 'Sobre mí',
        'about.text_01': 'Yo soy ingeniero de telecomunicaciones, con MBA en Gestión de Proyectos, y más de 10 años de experiencia en tecnlogía',
        'about.text_02': 'Actualmente en la empresa Sankhya desarrollo informes en SQL y dashboards web para clientes de ERP',
        'about.text_03': 'Me gusta transformar datos en información útil y conversar con clientes para comprender lo que realmente necesitan. Yo hablo portugués, inglés y español con fluidez',

        //Tecnologías
        'knowledge.technologies_01': 'Tecnologías',
        'knowledge.technologies_02': 'Datos',
        'knowledge.technologies_03': 'Herramientas',
        'knowledge.technologies_04': 'Git y GitHub',

        //Experiencias
        'experience.text_01': 'Experiencias',
        'experience.text_02': '2026 - actualidad',
        'experience.text_03': 'Analista de Implementación',
        'experience.text_04': 'Informes en SQL (Oracle) y dashboards web con HTML, CSS y JavaScript para clientes de ERP',
        'experience.text_05': 'Analista de Redes',
        'experience.text_06': 'Stefanini (cliente Vale)',
        'experience.text_07': 'Interfaces web, automacións en Python y dashboards no Grafana para herramientas de monitoreo.',
        'experience.text_08': 'Nokia (cliente TIM)',
        'experience.text_09': 'Informes de las pruebas de campo de las redes 2G, 3G y 4G.',

        //Proyectos
        'projects.text_01': 'Proyectos',
        'projects.text_02': 'Portafolio personal',
        'projects.text_03': 'Este sitio web. Hecho con HTML, CSS y JavaScript puros, responsivo y con menú móvil',
        'projects.text_04': 'Ver código',
        'projects.text_05': 'Próximamente',
        'projects.text_06': 'Nuevos proyectos en desarrollo',

        //Contactos
        'contact.text_01': 'Contacto',
        'contact.text_02': 'Yo estoy disponible para nuevas vacantes de desarrollador y datos.',

        //Pie de página
        'footer.text_01': 'Hecho con HTML, CSS y JavaScript',
        'footer.text_02': '© 2026 Allan Dymitri · Brasil'
    },
    en: {
        //Navegation bar
        'nav.about': 'About',
        'nav.technology': 'Technologies',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        //Section hero, introduce
        'hero.greeting': 'Hello, I am',
        'hero.role': 'Developer · JavaScript, HTML, CSS and SQL',
        'hero.text': 'I build dashboards and web interfaces, turn datas into useful information',
        'hero.projects': 'View projects',
        'hero.cv': 'Download CV',

        //About section
        'about.title': 'About me',
        'about.text_01': 'I am a telecommunications engineer with an MBA in Project Management and more than 10 years of experience in technology.',
        'about.text_02': 'Currently, at Sankhya, I build SQL reports and web dashboards for ERP clients, and I take part in system implementation, from requirements gathering to delivery.',
        'about.text_03': 'I enjoy turning data into useful information and talking with clients to understand what they really need. I speak Portuguese, English and Spanish fluently.',

        //Technologies
        'knowledge.technologies_01': 'Technologies',
        'knowledge.technologies_02': 'Data',
        'knowledge.technologies_03': 'Tools',
        'knowledge.technologies_04': 'Git and GitHub',

        //Expiriences
        'experience.text_01': 'Expiriences',
        'experience.text_02': '2026 - Present',
        'experience.text_03': 'Implementation Analyst',
        'experience.text_04': 'SQL reports (Oracle) and web dashboards with HTML, CSS and JavaScript for ERP customers.',
        'experience.text_05': 'Network Analyst',
        'experience.text_06': 'Stefanini (customer Vale)',
        'experience.text_07': 'Web interfaces, automations in Python and Grafana dashboards for monitoring tools.',
        'experience.text_08': 'Nokia (customer TIM)',
        'experience.text_09': 'Field test reports for 2G, 3G and 4G networks',

        //Projects
        'projects.text_01': 'Projects',
        'projects.text_02': 'Personal Portfolio',
        'projects.text_03': 'This website was built with HTML, CSS and vanilla JavaScript. Is responsive and with a mobile menu',
        'projects.text_04': 'View code',
        'projects.text_05': 'Coming soon',
        'projects.text_06': 'New projects in development',

        //Contacts
        'contact.text_01': 'Contacts',
        'contact.text_02': 'I am avaliable for new job opportunity',

        //Footer
        'footer.text_01': 'Made with HTML, CSS and vanilla JavaScript.',
        'footer.text_02': '© 2026 Allan Dymitri · Brazil'
        
    }
};

//Language buttons
const langButtons = document.querySelectorAll('.lang-button');
//CV
const cvLink = document.querySelector('.cv-link');

langButtons.forEach((currentButton) => {
    currentButton.addEventListener('click', () => {
        const lang = currentButton.dataset.lang;

        //Save the chosen language
        localStorage.setItem('language', lang);

        // Highlight the clicked button
        langButtons.forEach((button) => {
            button.classList.remove('active');
        });
        currentButton.classList.add('active');

        //Change the CV link to the chosen language
        cvLink.href = 'files_CVs/cv-allan-' + lang + '.pdf';
        
        //Translate every element with data-i18n
        const i18nElements = document.querySelectorAll('[data-i18n]');

        i18nElements.forEach((currentElement) => {
            const key = currentElement.dataset.i18n;
            currentElement.textContent = translations[lang][key];
        });
    });
});

//Load the saved language
const savedLanguage = localStorage.getItem('language');
langButtons.forEach((button) => {
    if (button.dataset.lang === savedLanguage) {
        button.click();
    }
});
// ----------------------- End Language -----------------------