/** @file app.js @brief Point d'entrée du laboratoire. */
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.locals.nomApplication = 'Mon laboratoire'; // TODO : adapter le nom.

// ROUTES : brancher chaque route avant le gestionnaire 404.
app.use('/', require('./routes/index'));
app.use('/exemple', require('./routes/exemple')); // Démonstration GET et POST : retirer au besoin.

// 404 et erreurs : ces gestionnaires doivent rester en dernier.
app.use((req, res) => res.status(404).render('pages/404', { title: 'Page introuvable' }));
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  console.error(err);
  res.status(err.status || 500).render('pages/error', { title: 'Erreur serveur' });
});

// Évite de démarrer le serveur lors d'un import pour les tests.
if (require.main === module) {
  const server = app.listen(PORT, () => console.log(`Serveur : http://localhost:${PORT}`));
  // OPTION Socket.IO : npm install socket.io, puis décommenter :
  // require('./services/socketService').init(server);
  // OPTION MQTT : npm install mqtt, puis décommenter :
  // require('./services/mqttService');
}
module.exports = app;
