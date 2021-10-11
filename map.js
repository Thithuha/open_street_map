const map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

}).addTo(map);

for (const i=0; i < markers.length; ++i)
{
L.marker( [markers[i].lat, markers[i].lng] )
    .bindPopup('<a href="' + msrkers[i].url + '"target="_blank" rel="noopener">' + markers[i].name + '</a>')
    // .openPopup();
    .addTo( map );
}
