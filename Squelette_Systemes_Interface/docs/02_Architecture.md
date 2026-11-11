# Guide 2 — Comprendre l'architecture

`Navigateur -> Route Express -> (Modèle / Service si nécessaire) -> res.render(...) -> Page EJS -> Navigateur`

| Fichier/dossier | Son rôle | Exemples |
| --- | --- | --- |
| `app.js` | Configure Express et rassemble les routes | `app.use('/exemple', ...)` |
| `routes/` | Répond aux requêtes HTTP | `router.get`, `router.post` |
| `models/` | Représente des données et leur logique | `Item`, `Commande` |
| `services/` | Parle aux systèmes externes | MQTT, SQL, Socket.IO |
| `views/pages/` | Génère les pages via EJS | `index.ejs`, `exemple.ejs` |
| `views/partials/` | Réutilise la structure HTML | `head`, `header`, `footer` |
| `public/` | Fichiers servis tels quels | CSS, JS côté client |

## Flux de l'exemple

- `GET /exemple` ouvre une page avec formulaire.
- Le navigateur envoie `POST /exemple` avec le champ `texte`.
- `express.urlencoded` permet de lire `req.body.texte`.
- La route valide sommairement la valeur et appelle `res.render`.
- `exemple.ejs` affiche la donnée avec `<%= resultat %>` (échappement HTML).

**À ne pas confondre :** `public/js/main.js` s'exécute dans le navigateur; `routes/*.js` et `services/*.js` s'exécutent sur le serveur Node.js. Une variable du serveur ne devient pas automatiquement accessible dans le navigateur.
