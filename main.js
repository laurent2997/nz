var map = L.map('map').setView([-43.531111,172.636667], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-43.531111, 172.636667]).addTo(map);
marker.bindPopup("<h2>Hey you! Zoom in and discover Christchurch</h2><br>I am a popup.").openPopup();

//marker anzeigen
console.log(marker);

/*
let age =10;
console.log(age)
*/

let absatz = "Hallo Welt!";
let nummer = 6;

console.log(`
<h3>Test fürs "Tutorial"</h3>
<p>${absatz}</p>
<p>Nummer plus 1 = ${nummer+1} </p>
<div id="map"></div>
`);

