# Portail UIDT - Site Web Statique

Ce projet est un site web statique moderne faisant office de portail d'information pour l'**Université Iba Der Thiam de Thiès (UIDT)** au Sénégal. Il offre aux étudiants, aux enseignants et au public une vitrine interactive présentant la vie universitaire, l'organisation administrative, les procédures d'inscription, ainsi que la vie de campus.

---

## 📋 Table des Matières

1. [Aperçu du Projet](#-aperçu-du-projet)
2. [Structure des Fichiers](#-structure-des-fichiers)
3. [Description des Pages](#-description-des-pages)
4. [Fonctionnalités Interactives (JavaScript)](#-fonctionnalités-interactives-javascript)
5. [Styles et Charte Graphique](#-styles-et-charte-graphique)
6. [Comment Exécuter le Projet](#-comment-exécuter-le-projet)
7. [Contributeurs et Droits](#-contributeurs-et-droits)

---

## 🔍 Aperçu du Projet

L'**Université Iba Der THIAM de Thiès** est un établissement public d'enseignement supérieur sénégalais avec une forte orientation professionnelle. Ce portail a été conçu comme une application web statique légère pour regrouper les informations clés dans un parcours utilisateur simple et fluide.

*   **Technologies utilisées :** HTML5, CSS3, JavaScript (Vanilla JS), FontAwesome (Icones).
*   **Polices :** Ubuntu (intégrée localement dans `/fonts`).
*   **Design :** Structure asymétrique avec des barres de navigation latérales synchronisées au défilement (Scroll-spy).

---

## 📁 Structure des Fichiers

Voici l'organisation générale du répertoire du projet :

```text
Portail_UIDT_site_statique/
│
├── index.html            # Page d'accueil (Actualités, UFRs et Instituts)
├── index.css             # Styles de mise en page pour la page d'accueil
│
├── admin.html            # Page Administration (Ressources humaines et services communs)
├── admin.css             # Styles spécifiques à la page administration
│
├── campus.html           # Page Campus Social (Lieux de vie, transport, sport, santé & demande de relevé)
├── campus.css            # Styles spécifiques à la page campus
│
├── scolarite.html        # Page Scolarité (Guides d'inscription, tarifs des frais de scolarité)
├── scolarite.css         # Styles spécifiques à la page scolarité
│
├── inscrire.html         # Formulaire d'inscription administrative en ligne
├── inscrire.css          # Styles du formulaire d'inscription
│
├── links.css             # Styles globaux partagés (navigation, footer, réinitialisations)
├── all.js                # Fichier JavaScript contenant toute l'interactivité du site
│
├── css/                  # Feuilles de style pour FontAwesome (icônes)
├── fonts/                # Polices de caractères (Ubuntu) importées localement
├── webfonts/             # Fichiers de polices binaires pour FontAwesome
└── images/               # Banques d'images (photos des campus, icônes, illustrations SVG)
```

---

## 📄 Description des Pages

### 1. 🏠 Page d'Accueil (`index.html`)
Cette page introduit l'université et propose :
*   **Actualités :** Un flux d'appels à candidatures (Master MPCA, Master BFA) et d'offres de bourses (Ashinaga Sénégal, Conseil Indien des Relations Culturelles).
*   **UFR et Établissements :** Une présentation claire des 4 Unités de Formation et de Recherche (UFR SES, UFR SET, UFR Santé, UFR SI), des 2 Instituts (IUT, ISFAR) et de l'École Supérieure (ENSA).
*   **Partenaires :** Un bandeau affichant les partenaires stratégiques de l'université.

### 2. 🏛️ Page Administration (`admin.html`)
Elle détaille la structure organisationnelle de l'université :
*   **Enseignants :** Répartition par grade (Professeurs Titulaires, Assimilés, Maîtres de Conférences, Assistants).
*   **Personnel (P.A.O.) :** Répartition des cadres administratifs, techniques et des ouvriers.
*   **Services Administratifs :** Description des fonctions du Rectorat, de la DAAP (Affaires Académiques) et de la Direction des Services Communs (Informatique, Matériel, Personnel).
*   *Système d'accès rapide latéral facilitant la lecture.*

### 3. 🌳 Page Campus Social (`campus.html`)
Cette section est dédiée à la vie estudiantine et sociale :
*   **Lieux de vie :** Détails des sites physiques principaux (Site VCN, ENSA, Hôtel du Rail) avec coordonnées géographiques et téléphoniques.
*   **Logement & Transport :** Conseils sur les transports urbains (Clandos, bus TATA et bus du CROUS) avec les tarifs associés.
*   **Sport & Santé :** Information sur les activités sportives disponibles (Football, Basket, Handball) et sur le service médical (prise en charge des ordonnances à 80%).
*   **Formulaire de demande de relevé de notes :** Formulaire permettant de soumettre une demande administrative avec dépôt de pièce justificative (Quitus sous format PNG/PDF/JPG).

### 4. 🎓 Page Scolarité (`scolarite.html`)
Elle rassemble les guides de procédure pour les rentrées :
*   **Nouveaux bacheliers (via Campusen) :** Guide étape par étape pour le paiement des droits et la préinscription.
*   **Anciens étudiants (via la plateforme ESPET) :** Étapes de réinscription en ligne.
*   **Grille des tarifs :** Tableau synthétique des droits d'inscription (pédagogique + administratif) pour la Licence (25 000 FCFA), le Master (50 000 FCFA) et le Doctorat (75 000 FCFA).

### 5. 📝 Page Inscription (`inscrire.html`)
Un formulaire d'inscription dynamique permettant de renseigner :
*   Les informations personnelles (nom, prénom, numéro de dossier, email, adresse, téléphone).
*   L'UFR et la filière choisie (LGI, LMI, LPC, LSEE, MIO, MTH, LEA, LAC).
*   Le mode de paiement mobile money (Orange Money, Wave, Free Money).

---

## ⚡ Fonctionnalités Interactives (`all.js`)

Le fichier JavaScript apporte des améliorations majeures à l'expérience utilisateur (UX) :

1.  **Menu de navigation fixe (Sticky Header) :** Dès que l'utilisateur fait défiler la page de plus de 55 pixels, la classe `.sticky` est ajoutée au menu de navigation pour le maintenir fixé en haut.
2.  **Indicateur de page active :** Détecte l'URL courante (`window.location.pathname`) pour ajouter une classe `.is-active` sur l'onglet correspondant du menu principal.
3.  **Barre de navigation latérale dynamique (Scroll-Spy) :**
    *   Au clic sur les liens de l'index d'une page (ex: Lieux de vie, Sport, Santé), le focus se déplace harmonieusement.
    *   Lors du défilement manuel, le script calcule les positions relatives des sections et active automatiquement le lien correspondant dans le menu latéral.
4.  **Validation du formulaire d'inscription :** Le script vérifie la présence de champs vides dans le formulaire et, si tout est conforme, affiche une boîte de dialogue de confirmation d'inscription.

---

## 🎨 Styles et Charte Graphique

*   **Fichiers CSS modulaires :** Chaque grande section a sa propre feuille de style pour maintenir une séparation claire des responsabilités de design.
*   **`links.css` :** Structure globale, reset de base, styles du menu de navigation (avec effets de survol et transitions fluides) et style harmonieux du pied de page (Footer).
*   **Responsive Web Design :** Utilisation de conteneurs flexibles (`flexbox` et `grid`) assurant un affichage optimal sur ordinateurs et appareils mobiles.

---

## 🚀 Comment Exécuter le Projet

Le projet étant entièrement statique, aucun serveur d'application n'est nécessaire pour le développement local.

1.  Téléchargez ou clonez le dépôt.
2.  Double-cliquez sur le fichier `index.html` pour ouvrir le site directement dans votre navigateur web préféré.
3.  Vous pouvez également utiliser des extensions de type **Live Server** (dans VS Code) pour bénéficier du rafraîchissement automatique lors de la modification des fichiers HTML/CSS/JS.

---

## ⚖️ Droits d'auteur

*   **Année :** 2022 / 2026
*   **Institution :** Université Iba Der Thiam de Thiès (UIDT) - Tous droits réservés.
