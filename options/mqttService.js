/** @file services/mqttService.js - Exemple MQTT FACULTATIF. */
const mqtt = require('mqtt');
const URL_BROKER = process.env.MQTT_URL || 'mqtt://localhost:1883';
const client = mqtt.connect(URL_BROKER);
client.on('connect', function () {
    console.log('Connecté au broker MQTT : ' + URL_BROKER);
    // TODO : client.subscribe('MON/TOPIC');
});
client.on('message', function (topic, message) {
    console.log('MQTT reçu :', topic, message.toString());
    // TODO : traitement métier propre au labo.
});
client.on('error', function (err) {
    console.error('Erreur MQTT :', err.message);
});
module.exports = client;
