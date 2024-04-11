let lat=-43.531111;
let long=172.636667;
let zoom=11;

let map = L.map('map', {
    center: [lat,long],
    zoom: zoom
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat,long]).addTo(map);
marker.bindPopup(`
    <h2>Hey you! Zoom in and discover Christchurch</h2>
    <ul>
        <li>Breite: ${lat.toFixed(5)} </li>
        <li>Länge: ${long.toFixed(5)} </li>
    </ul>
`).openPopup();

L.control.scale({
    imperial:false
}).addTo(map);











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

