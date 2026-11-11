# Squelette réutilisable — Systèmes d'interface

Ce dépôt est une **base de départ**, pas une solution de laboratoire. Il reprend la séparation Node.js / Express / EJS du tutoriel du cours (routes, models, public, views/pages, views/partials), avec des services **facultatifs**. La démonstration `/exemple` peut être supprimée.

## Démarrage (Windows / VS Code)
1. Décompresser le ZIP et ouvrir **ce dossier** dans VS Code.
2. Installer Node.js compatible avec Express 5 (Node.js 18 ou plus récent).
3. Dans le terminal du projet : `npm install`.
4. Copier `.env.example` sous le nom `.env` (facultatif pour démarrer).
5. Exécuter `npm start` ou `npm run dev`.
6. Naviguer vers `http://localhost:3000`, puis `http://localhost:3000/exemple`.
7. Tester une adresse inexistante pour vérifier la page 404.

## Quoi modifier à chaque laboratoire ?
1. Lire l'énoncé : déterminer les pages, routes, données et services requis.
2. Modifier `name` dans `package.json` et `nomApplication` dans `app.js`.
3. Ajouter **un fichier par fonction/route** dans `routes/`, puis l'enregistrer dans `app.js`.
4. Mettre la logique des classes/données dans `models/`.
5. Placer les nouvelles pages dans `views/pages/` et réutiliser les `partials/`.
6. Ajuster `views/partials/header.ejs` et `public/css/style.css`, `public/js/main.js`.
7. N'activer les modules `options/` que s'ils sont demandés par l'énoncé.
8. Tester GET, POST, erreurs et exigences de l'enseignant; réaliser ses propres commits.

## Repères
- `app.js` : configuration serveur, routes, erreurs 404/500.
- `routes/` : points d'entrée HTTP (GET/POST).
- `models/` : classes et structures de données.
- `services/` : accès à des systèmes externes.
- `views/pages/` : pages HTML générées par EJS.
- `views/partials/` : morceaux communs : head, header, footer.
- `public/` : CSS/JavaScript/images accessibles au navigateur.
- `options/` : exemples **non chargés** de MQTT, Socket.IO, MariaDB.
- `docs/` : pas-à-pas, architecture, dépannage, adaptation, remise et attribution.

## Limites
- Le modèle ne remplace pas les consignes et barèmes de chaque labo.
- Les modules externes requièrent configuration, dépendances et parfois services locaux.
- Il n'y a pas d'authentification, de sécurité de production ni de base de données prédéfinie.
- Pour les exemples de routes, l'organisation du cours peut exiger **un fichier par opération** : adaptez-la à la consigne.

Commencer par `docs/01_Demarrage.md`, puis `docs/02_Architecture.md`.
