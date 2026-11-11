/**
 * @file routes/index.js
 * @author Xavier Lamoureux
 * @brief Définit la route d'accueil du site.
 */
const express = require('express');
const router = express.Router();

// GET / : affiche la page d'accueil.
router.get('/', function (req, res) {
    res.render('pages/index', { title: 'Accueil' });
});

// TODO : créer d'autres fichiers de routes et les enregistrer dans app.js.
module.exports = router;
