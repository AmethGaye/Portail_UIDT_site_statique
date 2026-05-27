# 🎓 Portail UIDT — Site Web Statique

> Portail d'information de l'Université Iba Der Thiam de Thiès (Sénégal)

---

## 📌 Présentation du Projet

Ce projet est un **site web statique** conçu dans le cadre d'un **projet académique** durant l'année universitaire **2022 – 2023**, en **deuxième année de Licence (L2)** à l'Université Iba Der Thiam de Thiès (UIDT).

L'objectif pédagogique était de mettre en pratique les compétences acquises en **développement web front-end** (HTML, CSS, JavaScript) en réalisant un portail d'information fonctionnel et réaliste pour notre propre université.

Le site a été entièrement développé **sans framework ni librairie externe**, en utilisant uniquement les technologies web natives :

| Technologie | Utilisation |
| :--- | :--- |
| **HTML5** | Structure sémantique de toutes les pages |
| **CSS3** | Mise en page (Grid, Flexbox), animations et transitions |
| **JavaScript (Vanilla)** | Interactivité (menu sticky, scroll-spy, validation de formulaires) |
| **FontAwesome** | Icônes vectorielles (chargées localement) |
| **Ubuntu Font** | Police de caractères principale (intégrée localement dans `/fonts`) |

---

## 🧩 Contexte et Problématique

L'**Université Iba Der Thiam de Thiès** est un établissement public d'enseignement supérieur sénégalais à forte orientation professionnelle. Elle regroupe **4 UFR** (Sciences Économiques et Sociales, Sciences et Technologies, Sciences de la Santé, Sciences de l'Ingénieur), **2 Instituts** (IUT, ISFAR) et **1 École Supérieure** (ENSA).

### Constat

À l'époque de la réalisation du projet, les étudiants de l'UIDT faisaient face à plusieurs difficultés :

- **Informations dispersées** : les renseignements sur les procédures d'inscription, les frais de scolarité, la vie de campus et l'organisation administrative étaient répartis sur plusieurs supports (affichages physiques, groupes WhatsApp, bouche-à-oreille), sans point d'accès centralisé et fiable.
- **Parcours étudiant peu lisible** : les nouveaux bacheliers orientés via Campusen et les anciens étudiants ne disposaient pas d'un guide clair et unifié décrivant les étapes d'inscription (administrative et pédagogique).
- **Manque de visibilité** : l'université ne disposait pas d'une vitrine web légère et accessible présentant ses formations, ses campus et ses services de manière structurée.

### Problématique

> **Comment centraliser et présenter de manière claire, accessible et interactive l'ensemble des informations essentielles à la vie universitaire de l'UIDT, à destination des étudiants, du personnel et du grand public ?**

---

## 🎯 Objectifs

Le projet vise à répondre à la problématique ci-dessus à travers les objectifs suivants :

1. **Centraliser l'information** — Regrouper en un seul portail toutes les informations clés : actualités, formations, administration, vie de campus et procédures de scolarité.
2. **Faciliter le parcours étudiant** — Proposer des guides pas-à-pas pour l'inscription des nouveaux bacheliers (Campusen) et la réinscription des anciens étudiants (ESPET), accompagnés d'un tableau clair des frais de scolarité.
3. **Présenter l'université** — Offrir une vitrine numérique valorisant les formations (Licence, Master, Doctorat), les campus physiques (Site VCN, ENSA, Hôtel du Rail) et les services (sport, santé, transport).
4. **Offrir une expérience utilisateur fluide** — Intégrer des mécanismes d'interactivité (navigation collante, scroll-spy latéral, formulaires dynamiques) pour une navigation intuitive et agréable.
5. **Garantir l'accessibilité** — Concevoir un site statique léger, ne nécessitant aucun serveur d'application, ouvrable directement dans un navigateur web.

---

## ⚡ Fonctionnalités Disponibles

### 🏠 Page d'Accueil (`index.html`)
- Flux d'**actualités** : appels à candidatures (Master MPCA, Master BFA) et offres de bourses (Ashinaga, Conseil Indien des Relations Culturelles).
- Présentation des **UFR, Instituts et Écoles** de l'université avec leur organisation.
- Bandeau des **partenaires** stratégiques.

### 🏛️ Administration (`admin.html`)
- **Effectifs enseignants** : répartition par grade (Professeurs Titulaires, Assimilés, Maîtres de Conférences, Assistants).
- **Personnel administratif (P.A.O.)** : répartition des cadres administratifs, techniques et ouvriers.
- **Services administratifs** : description du Rectorat, de la DAAP, de la Direction des Services Communs (informatique, matériel, personnel).
- Navigation latérale dynamique (**scroll-spy**) pour un accès rapide aux sections.

### 📚 Offre de Formation (`cours.html`)
- Catalogue des formations par cycle : **Licence**, **Master**, **Doctorat**.
- Présentation des **Écoles et Instituts professionnels** (ENSA, IUT, ISFAR) et de leurs diplômes.
- Navigation latérale avec scroll-spy.

### 🌳 Campus Social (`campus.html`)
- **Lieux de vie** : détails des 3 sites physiques (VCN, ENSA, Hôtel du Rail) avec photos, coordonnées GPS et numéros de téléphone.
- **Logement & Transport** : conseils pratiques et tarifs (clandos, bus TATA, bus du CROUS).
- **Sport** : activités disponibles (football, basket, handball) avec galerie photos.
- **Service médical** : informations sur la prise en charge (80% des ordonnances couvertes).
- **Formulaire de demande de relevé de notes** : formulaire stylisé avec dépôt de pièce justificative (Quitus) au format PNG/JPG/PDF.

### 🎓 Scolarité (`scolarite.html`)
- **Guide d'inscription des nouveaux bacheliers** (via Campusen) : étapes détaillées.
- **Guide de réinscription des anciens étudiants** (via ESPET) : procédure en ligne.
- **Inscription pédagogique** : documents nécessaires et démarches auprès des UFR.
- **Grille tarifaire** : tableau synthétique des droits d'inscription par cycle.

| Cycle | Droit pédagogique | Droit administratif | **Total** |
| :--- | :---: | :---: | :---: |
| Licence | 10 000 FCFA | 15 000 FCFA | **25 000 FCFA** |
| Master | 10 000 FCFA | 40 000 FCFA | **50 000 FCFA** |
| Doctorat | 20 000 FCFA | 55 000 FCFA | **75 000 FCFA** |

### 📝 Inscription en Ligne (`inscrire.html`)
- Formulaire d'inscription dynamique avec :
  - Saisie des informations personnelles (nom, prénom, n° de dossier, email, adresse, téléphone).
  - Sélection de l'UFR et de la filière.
  - Choix du mode de paiement mobile (Orange Money, Wave, Free Money).
- Validation HTML5 native des champs requis.

### 🔧 Interactivité Globale (`all.js`)
- **Menu de navigation sticky** : la barre de navigation se fixe en haut de l'écran lors du défilement.
- **Indicateur de page active** : l'onglet correspondant à la page courante est visuellement mis en évidence.
- **Scroll-spy latéral** : la barre de navigation latérale (pages Admin, Campus, Cours) se synchronise automatiquement avec le défilement.
- **Design responsive** : adaptation automatique de la mise en page sur smartphones et tablettes grâce aux media queries CSS.

---

## 🚀 Comment Exécuter le Projet

Le projet est entièrement statique. Aucune installation ni serveur n'est nécessaire.

1. **Clonez** le dépôt ou téléchargez l'archive ZIP.
2. Ouvrez le fichier **`index.html`** dans votre navigateur web.
3. *(Optionnel)* Utilisez l'extension **Live Server** de VS Code pour bénéficier du rechargement automatique lors du développement.

---

## 📁 Structure du Projet

```text
Portail_UIDT_site_statique/
│
├── index.html / index.css          # Page d'accueil
├── admin.html / admin.css          # Page administration
├── campus.html / campus.css        # Page campus social
├── cours.html / cours.css          # Page offre de formation
├── scolarite.html / scolarite.css  # Page scolarité & inscription
├── inscrire.html / inscrire.css    # Formulaire d'inscription
│
├── links.css                       # Styles partagés (header, footer, aside, responsive)
├── all.js                          # Logique JavaScript globale
│
├── css/                            # Feuilles de style FontAwesome
├── fonts/                          # Police Ubuntu (locale)
├── webfonts/                       # Fichiers binaires FontAwesome
└── images/                         # Photos des campus, icônes, illustrations
```

---

## ⚖️ Droits d'Auteur

- **Année universitaire** : 2022 – 2023 (L2)
- **Institution** : Université Iba Der Thiam de Thiès (UIDT).
