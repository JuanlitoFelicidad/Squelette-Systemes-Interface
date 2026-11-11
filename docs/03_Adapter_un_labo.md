# Guide 3 — Adapter le squelette à un nouveau labo

## Méthode recommandée

1. **Relever les exigences** : pages attendues, données, méthodes GET/POST, communication, captures, Git, démonstration.
2. **Faire une liste de routes** : exemple `/ajouter` (GET formulaire, POST traitement), `/supprimer` (POST). Chaque route ou opération peut avoir son propre fichier selon le cours.
3. **Créer les fichiers** : route dans `routes/`, page EJS dans `views/pages/`, classes dans `models/` au besoin.
4. **Brancher la route** dans `app.js` **avant** le 404, par exemple `app.use('/ajouter', require('./routes/ajouter'))`.
5. **Ajouter la navigation** dans `views/partials/header.ejs` et vérifier les liens.
6. **Isoler les services** : `options/` contient des exemples facultatifs. Ne pas ajouter `mqtt`, `socket.io`, `mariadb` à moins que le labo les demande.
7. **Tester progressivement** : page d'accueil, route, formulaire, résultats, cas invalides, 404.
8. **Documenter ses adaptations** : ce qui a été ajouté, ce qui reste à faire et l'aide externe utilisée.

## Exemples de scénarios

| Labo | À garder | À ajouter |
| --- | --- | --- |
| Formulaire simple | Express, EJS, routes | GET/POST, validations |
| Liste d'objets | Base + EJS | modèles/classes, routes séparées |
| MQTT | Base | broker, module `mqtt`, service adapté, topics |
| Temps réel | Base | Socket.IO, événements serveur/client |
| MariaDB | Base | module `mariadb`, configuration `.env`, requêtes paramétrées |

**Attention :** un modèle ne garantit pas qu'un exercice est réussi : les routes, les données et la logique sont à coder selon chaque énoncé.
