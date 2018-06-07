var Cesium = require('cesium/Cesium');
require('cesium/Widgets/widgets.css');
require('./css/main.css');

var viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider : Cesium.createWorldTerrain({
        url : Cesium.IonResource.fromAssetId(3956),
        requestVertexNormals : true 
    }),
    baseLayerPicker : false,
    shouldAnimate : true
});

viewer.dataSources.add(Cesium.CzmlDataSource.load('/simple.czml')).then(function(ds) {
    viewer.trackedEntity = ds.entities.getById('path');
});


// viewer.dataSources.add(Cesium.GeoJsonDataSource.load('/tl_2010_15_tract10.geojson.json', {
//     stroke: Cesium.Color.HOTPINK,
//     strokeWidth: 8,
//     markerSymbol: '?'
//   }));

