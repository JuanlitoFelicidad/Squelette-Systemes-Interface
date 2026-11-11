# Guide 4 — Dépannage rapide

| Symptôme | Vérification |
| --- | --- |
| `Cannot find module 'express'` | Être dans le bon dossier, faire `npm install`. |
| `EADDRINUSE: 3000` | Un serveur utilise déjà le port : l'arrêter ou changer `PORT`. |
| `Failed to lookup view` | Vérifier le chemin `views/pages/*.ejs` et `res.render('pages/...')`. |
| Erreur 404 sur une nouvelle page | Vérifier `app.use` avant le 404, puis le chemin du `router.get`. |
| Formulaire POST vide | Vérifier `method`, `name` de l'input et `express.urlencoded`. |
| CSS/JS absent | Utiliser `/css/style.css`, `/js/main.js`; regarder la console navigateur. |
| MQTT ne reçoit rien | Vérifier que le broker tourne, l'URL, les topics (majuscules) et l'abonnement. |
| Socket.IO ne se connecte pas | Vérifier `init(server)`, la dépendance et le script client. |
| SQL refuse la connexion | Vérifier serveur, port, utilisateur, base, tables et variables `.env`. |

Pour diagnostiquer : lire la **première erreur du terminal**, vérifier le fichier cité, reproduire avec l'URL exacte, corriger un problème à la fois.
