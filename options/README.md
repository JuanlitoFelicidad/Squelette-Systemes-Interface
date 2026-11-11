# Modules facultatifs

Le squelette de base n'a besoin ni de MQTT, ni de Socket.IO, ni de MariaDB.

- **MQTT** : `npm install mqtt`, copier `options/mqttService.js` dans `services/`, configurer `MQTT_URL` dans `.env`, activer le service dans `app.js`. Prévoir un broker Mosquitto en marche.
- **Socket.IO** : `npm install socket.io`, copier `options/socketService.js` dans `services/`, activer `init(server)` dans `app.js` et ajouter `<script src="/socket.io/socket.io.js"></script>` dans `views/partials/footer.ejs` avant `main.js` si le navigateur doit recevoir des événements.
- **MariaDB** : `npm install mariadb`, copier `options/database.js` dans `services/`, configurer les `DB_*` dans `.env`. Une base MariaDB et les tables du labo doivent exister. Utiliser des requêtes paramétrées.

**Important** : copier seulement les modules nécessaires; ne jamais publier `.env`, un mot de passe ou des données personnelles.
