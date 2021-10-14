
const baseMapLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});

const center = ol.proj.fromLonLat([2.208, 46.498]);

const view = new ol.View({
  center: center,
  zoom: 7
});

const layer = new ol.layer.Tile({
  source: new ol.source.OSM()
});

const map = new ol.Map({
  target: 'map',
  layers: [layer],
  view: view
});
