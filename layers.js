ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([682747.560329, 9187656.528720, 699581.639365, 9198357.077872]);
var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_AksesibilitasPTN_SBY_1 = new ol.format.GeoJSON();
var features_AksesibilitasPTN_SBY_1 = format_AksesibilitasPTN_SBY_1.readFeatures(json_AksesibilitasPTN_SBY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AksesibilitasPTN_SBY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasPTN_SBY_1.addFeatures(features_AksesibilitasPTN_SBY_1);
var lyr_AksesibilitasPTN_SBY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AksesibilitasPTN_SBY_1, 
                style: style_AksesibilitasPTN_SBY_1,
                popuplayertitle: 'Aksesibilitas PTN_SBY',
                interactive: true,
    title: 'Aksesibilitas PTN_SBY<br />\
    <img src="styles/legend/AksesibilitasPTN_SBY_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/AksesibilitasPTN_SBY_1_1.png" /> 2,4km (30 menit)<br />' });
var format_PTN_diSBY_2 = new ol.format.GeoJSON();
var features_PTN_diSBY_2 = format_PTN_diSBY_2.readFeatures(json_PTN_diSBY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTN_diSBY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTN_diSBY_2.addFeatures(features_PTN_diSBY_2);
var lyr_PTN_diSBY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTN_diSBY_2, 
                style: style_PTN_diSBY_2,
                popuplayertitle: 'PTN_ di SBY',
                interactive: true,
    title: 'PTN_ di SBY<br />\
    <img src="styles/legend/PTN_diSBY_2_0.png" /> ITS<br />\
    <img src="styles/legend/PTN_diSBY_2_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTN_diSBY_2_2.png" /> UNAIR<br />\
    <img src="styles/legend/PTN_diSBY_2_3.png" /> UNESA<br />\
    <img src="styles/legend/PTN_diSBY_2_4.png" /> UPNV Jatim<br />' });

lyr_Positronnolabels_0.setVisible(true);lyr_AksesibilitasPTN_SBY_1.setVisible(true);lyr_PTN_diSBY_2.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_AksesibilitasPTN_SBY_1,lyr_PTN_diSBY_2];
lyr_AksesibilitasPTN_SBY_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTN_diSBY_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Foto': 'Foto', 'Deskripsi': 'Deskripsi', 'Deskrips_1': 'Deskrips_1', 'Deskrips_2': 'Deskrips_2', });
lyr_AksesibilitasPTN_SBY_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTN_diSBY_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Foto': 'TextEdit', 'Deskripsi': 'TextEdit', 'Deskrips_1': 'TextEdit', 'Deskrips_2': 'TextEdit', });
lyr_AksesibilitasPTN_SBY_1.set('fieldLabels', {'fid': 'no label', 'Access': 'inline label - always visible', });
lyr_PTN_diSBY_2.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Foto': 'no label', 'Deskripsi': 'no label', 'Deskrips_1': 'no label', 'Deskrips_2': 'no label', });
lyr_PTN_diSBY_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});