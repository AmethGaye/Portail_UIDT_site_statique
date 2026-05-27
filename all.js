// INDEX.HTML : HEADER
let nav = document.querySelector('.nav-container');

if (nav) {
    document.addEventListener('scroll', () => {
        if (window.scrollY > 55) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }      
    });
}

// LIENS ENTRE ELEMENTS DE LA BARRE DE NAV
const pageActive = window.location.pathname.split('/').pop() || 'index.html';
let nav_item = document.querySelectorAll('.item');

nav_item.forEach(itm => {
    const p = itm.querySelector('a');
    if (p) {
        const hrefName = p.getAttribute('href');
        // Vérifie si le lien correspond à la page active
        if (hrefName === pageActive || (pageActive === 'index.html' && hrefName === '#')) {
            itm.classList.add('is-active');
        }
    }
});

// ASIDE NAVIGATION
function active_cleaner(elements) {
    elements.forEach(itm => {
        itm.classList.remove('active');
    });
}

let nav_link = document.querySelectorAll('.nav-aside ul a');
let blocs = document.querySelectorAll('.aside-linked .link');
let asideLinked = document.querySelector('.aside-linked');

if (asideLinked && nav_link.length > 0 && blocs.length > 0) {
    let xOffset = asideLinked.offsetTop;

    // QUAND JE CLIQUE
    nav_link.forEach(itm => {
        itm.addEventListener('click', () => {
            active_cleaner(nav_link);
            itm.classList.add('active');
        });
    });

    // QUAND JE DEFILE
    window.addEventListener('scroll', () => {
        let top = window.scrollY;
        blocs.forEach(item => {
            let offset = item.offsetTop + xOffset - 40;
            let height = item.offsetHeight;
            let id = item.getAttribute('id');
            if (id && top > offset && top < height + offset) {
                let targetLink = document.querySelector('.nav-aside ul a[href*="' + id + '"]');
                if (targetLink) {
                    active_cleaner(nav_link);
                    targetLink.classList.add('active');
                }
            }
        });
    });
}

// FORMULAIRE D'INSCRIPTION : VALIDATION ET SOUMISSION
const registrationForm = document.querySelector('.form_1');
if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Vous avez réussi votre inscription. \nVous allez recevoir plus de détails dans votre boîte mail.');
        registrationForm.reset();
    });
}

// FORMULAIRE DE DEMANDE DE RELEVÉ (CAMPUS.HTML)
const transcriptForm = document.querySelector('.form_2 form');
if (transcriptForm) {
    transcriptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Votre demande de relevé de notes a été soumise avec succès.');
        transcriptForm.reset();
    });
}

// Rétrocompatibilité pour l'attribut onclick="f()" dans l'HTML
function f() {
    // La validation et soumission sont maintenant gérées via l'écouteur d'événement submit
}

// AFFICHER LE NOM DU FICHIER SÉLECTIONNÉ DANS LA DEMANDE DE RELEVÉ
const quitusInput = document.getElementById('quitus_file');
const fileDisplay = document.getElementById('file-name-display');
if (quitusInput && fileDisplay) {
    quitusInput.addEventListener('change', (e) => {
        const fileName = e.target.files[0] ? e.target.files[0].name : 'Aucun fichier sélectionné';
        fileDisplay.textContent = fileName;
    });
}
