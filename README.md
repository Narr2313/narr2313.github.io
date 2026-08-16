# Portfolio — Cyril Piot

Site portfolio 100 % statique (HTML / CSS / JavaScript vanilla), sans backend
ni base de données, prêt à être hébergé gratuitement sur **GitHub Pages**.

## Aperçu

- `index.html` — tout le contenu et la structure du site (une seule page)
- `style.css` — tout le design (couleurs, typographies, mise en page, responsive)
- `script.js` — comportements : menu mobile, apparition au scroll, effet de curseur discret
- `assets/` — images, icônes et visuels de projets (actuellement des **placeholders** à remplacer)

```
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/       → photo de profil, logos marketplace, image de partage (og-image)
    ├── icons/         → favicon
    └── projects/      → miniatures des projets
```

## Ouvrir le site en local

Aucune installation nécessaire : ouvre simplement `index.html` dans ton navigateur.
Le site fonctionne entièrement sans serveur.

## Mettre le site en ligne avec GitHub Pages

1. Crée un repository GitHub (public), par exemple `portfolio`.
2. Ajoute tous les fichiers de ce dossier à la racine du repository (`index.html`
   doit être à la racine, pas dans un sous-dossier).
3. Va dans **Settings → Pages** du repository.
4. Dans **Branch**, sélectionne ta branche principale (`main`) et le dossier `/ (root)`.
5. Enregistre. GitHub te donnera une URL du type
   `https://ton-pseudo.github.io/portfolio/`.
6. Ouvre `index.html` et remplace les URLs `canonical` / `og:url` en haut du
   fichier par cette adresse (voir section suivante).

## Ce qu'il faut personnaliser

Tout ce qui doit être remplacé est identifié par un commentaire du type
`<!-- Remplace... -->` directement dans `index.html`.

### 1. Textes
Tous les textes (présentation, projets, services...) sont directement dans
`index.html`, en clair, faciles à modifier avec n'importe quel éditeur de texte.

### 2. Images et logos
Le dossier `assets/` contient des **images placeholder au format SVG**
(fond dégradé + texte "PLACEHOLDER"), pour que le site soit déjà fonctionnel
et visuellement cohérent avant même que tu ajoutes tes propres visuels.

À remplacer :
- `assets/images/avatar-placeholder.svg` → ta photo ou ton avatar (optionnel, non utilisé par défaut dans le HTML, prêt si tu veux l'ajouter)
- `assets/images/og-image.svg` → image affichée lors du partage sur les réseaux (1200×630 recommandé)
- `assets/icons/favicon.svg` → ton propre favicon
- `assets/images/marketplace-fab.svg` et `marketplace-unity.svg` → logos officiels FAB / Unity Asset Store
- `assets/projects/*.svg` → captures d'écran ou renders de tes projets (format `.jpg`/`.png`/`.webp` conseillé, 640×400 ou plus, ratio 16:10)

Pour remplacer une image : garde le même nom de fichier (ou change le `src=`
correspondant dans `index.html`) et le nouveau visuel apparaîtra automatiquement.

### 3. Liens
Cherche les `href="#"` dans `index.html` (section **Marketplace** et **Contact**,
ainsi que le **footer**) et remplace-les par :
- ton lien FAB Marketplace
- ton lien Unity Asset Store
- ton adresse email (`mailto:...`)
- ton LinkedIn
- ton Upwork
- ton Fiverr

### 4. Ajouter / supprimer un projet
Dans `index.html`, section `<section id="projects">`, chaque projet est un
bloc :

```html
<article class="project-card reveal">
  <div class="project-media">
    <img src="assets/projects/mon-projet.svg" alt="Description" loading="lazy" width="640" height="400">
  </div>
  <div class="project-body">
    <h3>Titre du projet</h3>
    <p>Description courte.</p>
    <ul class="tech-tags">
      <li>Technologie 1</li><li>Technologie 2</li>
    </ul>
    <a href="#" class="btn btn-small">View Project</a>
  </div>
</article>
```

Pour ajouter un projet : copie ce bloc entier, colle-le juste avant ou après
un autre, puis modifie l'image, le titre, la description, les technologies et
le lien. Pour en supprimer un, supprime le bloc entier.

### 5. Couleurs et typographies
Toutes les couleurs sont centralisées en haut de `style.css`, dans le bloc
`:root { ... }` (section « 1. DESIGN TOKENS »). Modifie ces variables pour
changer l'identité visuelle du site sans toucher au reste du fichier.

## Performance & bonnes pratiques déjà en place

- Aucune bibliothèque externe lourde, aucun framework, aucun tracker.
- Police chargée via Google Fonts avec `preconnect` et `font-display: swap`.
- Images en `loading="lazy"` (chargement différé).
- Une seule feuille de style et un seul script, tous deux légers.
- HTML sémantique (`header`, `main`, `section`, `footer`, `nav`) pour le SEO
  et l'accessibilité.
- Respect de `prefers-reduced-motion` (les animations sont désactivées si
  l'utilisateur les a désactivées dans son système).
- Aucun formulaire ni fonctionnalité nécessitant un serveur : compatible à
  100 % avec GitHub Pages.

## SEO

Les balises suivantes sont déjà en place dans `<head>` et peuvent être
ajustées librement :
- `<title>` et `<meta name="description">`
- Balises Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
- Balises Twitter Card
- `<link rel="canonical">` (à mettre à jour avec ton URL GitHub Pages finale)
- Favicon

Pour ajouter Google Search Console plus tard : ajoute la balise de
vérification fournie par Google directement dans le `<head>` de
`index.html`, ou dépose le fichier de vérification HTML à la racine du
repository.

## Licence

Ce site t'appartient entièrement — libre à toi de le modifier comme tu le
souhaites.
