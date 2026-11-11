# Guide 1 — Installer et lancer le projet

**Prérequis :** VS Code, Node.js (18+) et npm. Aucune base de données ou broker n'est nécessaire pour l'application de base.

1. Extraire le projet dans un nouveau dossier. Ne pas travailler directement dans le ZIP.
2. Ouvrir le dossier contenant `package.json` dans VS Code.
3. Ouvrir **Terminal > Nouveau terminal**. Vérifier `node -v` et `npm -v`.
4. Exécuter `npm install` et ensuite `npm start`.
5. Vérifier la ligne `Serveur : http://localhost:3000`.
6. Ouvrir `/`, `/exemple` et `/une-route-inexistante` dans le navigateur.
7. Dans `/exemple`, soumettre une valeur : elle doit s'afficher après le POST.
8. Arrêter le serveur avec **Ctrl+C**.

**Option de développement :** `npm run dev` redémarre à chaque changement du code serveur.

**Avant le premier commit :** renommer l'application, lire le barème, supprimer les démonstrations inutiles, vérifier que `.env` et `node_modules/` sont ignorés.
