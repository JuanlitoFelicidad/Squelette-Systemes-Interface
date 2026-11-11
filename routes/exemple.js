/** @file routes/exemple.js @brief Démonstration des requêtes GET et POST. */
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.render('pages/exemple', { title: 'Exemple', resultat: null }));
router.post('/', (req, res) => {
  const texte = String(req.body.texte || '').trim().slice(0, 200);
  res.render('pages/exemple', { title: 'Exemple', resultat: texte || 'Aucune valeur reçue' });
});
module.exports = router;
