var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_smolensk_soils_1 = new ol.format.GeoJSON();
var features_smolensk_soils_1 = format_smolensk_soils_1.readFeatures(json_smolensk_soils_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smolensk_soils_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_smolensk_soils_1.addFeatures(features_smolensk_soils_1);
var lyr_smolensk_soils_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smolensk_soils_1, 
                style: style_smolensk_soils_1,
                interactive: false,
    title: 'smolensk_soils<br />\
    <img src="styles/legend/smolensk_soils_1_0.png" /> <br />\
    <img src="styles/legend/smolensk_soils_1_1.png" /> 36<br />\
    <img src="styles/legend/smolensk_soils_1_2.png" /> 38<br />\
    <img src="styles/legend/smolensk_soils_1_3.png" /> 39<br />\
    <img src="styles/legend/smolensk_soils_1_4.png" /> 42<br />\
    <img src="styles/legend/smolensk_soils_1_5.png" /> 46<br />\
    <img src="styles/legend/smolensk_soils_1_6.png" /> 50<br />\
    <img src="styles/legend/smolensk_soils_1_7.png" /> 52<br />\
    <img src="styles/legend/smolensk_soils_1_8.png" /> 54<br />\
    <img src="styles/legend/smolensk_soils_1_9.png" /> 56<br />\
    <img src="styles/legend/smolensk_soils_1_10.png" /> 58<br />\
    <img src="styles/legend/smolensk_soils_1_11.png" /> 62<br />\
    <img src="styles/legend/smolensk_soils_1_12.png" /> 85<br />\
    <img src="styles/legend/smolensk_soils_1_13.png" /> 164<br />\
    <img src="styles/legend/smolensk_soils_1_14.png" /> 166<br />\
    <img src="styles/legend/smolensk_soils_1_15.png" /> 187<br />\
    <img src="styles/legend/smolensk_soils_1_16.png" /> 188<br />\
    <img src="styles/legend/smolensk_soils_1_17.png" /> 307<br />'
        });
var format_cover2_admin_M110_2 = new ol.format.GeoJSON();
var features_cover2_admin_M110_2 = format_cover2_admin_M110_2.readFeatures(json_cover2_admin_M110_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cover2_admin_M110_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cover2_admin_M110_2.addFeatures(features_cover2_admin_M110_2);
var lyr_cover2_admin_M110_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cover2_admin_M110_2, 
                style: style_cover2_admin_M110_2,
                interactive: false,
                title: 'cover2_admin_M1-1.0'
            });
var format_smolensk_parcels_agr_3 = new ol.format.GeoJSON();
var features_smolensk_parcels_agr_3 = format_smolensk_parcels_agr_3.readFeatures(json_smolensk_parcels_agr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smolensk_parcels_agr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_smolensk_parcels_agr_3.addFeatures(features_smolensk_parcels_agr_3);
var lyr_smolensk_parcels_agr_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smolensk_parcels_agr_3, 
                style: style_smolensk_parcels_agr_3,
                interactive: true,
                title: '<img src="styles/legend/smolensk_parcels_agr_3.png" /> smolensk_parcels_agr'
            });
var format_temp_torgi_4 = new ol.format.GeoJSON();
var features_temp_torgi_4 = format_temp_torgi_4.readFeatures(json_temp_torgi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temp_torgi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temp_torgi_4.addFeatures(features_temp_torgi_4);
var lyr_temp_torgi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_temp_torgi_4, 
                style: style_temp_torgi_4,
                interactive: true,
                title: '<img src="styles/legend/temp_torgi_4.png" /> temp_torgi'
            });
var format_torgi_centroids_5 = new ol.format.GeoJSON();
var features_torgi_centroids_5 = format_torgi_centroids_5.readFeatures(json_torgi_centroids_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_torgi_centroids_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_torgi_centroids_5.addFeatures(features_torgi_centroids_5);
var lyr_torgi_centroids_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_torgi_centroids_5, 
                style: style_torgi_centroids_5,
                interactive: false,
                title: '<img src="styles/legend/torgi_centroids_5.png" /> torgi_centroids'
            });
var format_temp_orgs_6 = new ol.format.GeoJSON();
var features_temp_orgs_6 = format_temp_orgs_6.readFeatures(json_temp_orgs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temp_orgs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temp_orgs_6.addFeatures(features_temp_orgs_6);
var lyr_temp_orgs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_temp_orgs_6, 
                style: style_temp_orgs_6,
                interactive: true,
                title: '<img src="styles/legend/temp_orgs_6.png" /> temp_orgs'
            });

lyr_OSMStandard_0.setVisible(true);lyr_smolensk_soils_1.setVisible(true);lyr_cover2_admin_M110_2.setVisible(true);lyr_smolensk_parcels_agr_3.setVisible(true);lyr_temp_torgi_4.setVisible(true);lyr_torgi_centroids_5.setVisible(true);lyr_temp_orgs_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_smolensk_soils_1,lyr_cover2_admin_M110_2,lyr_smolensk_parcels_agr_3,lyr_temp_torgi_4,lyr_torgi_centroids_5,lyr_temp_orgs_6];
lyr_smolensk_soils_1.set('fieldAliases', {'POLIGON_ID': 'POLIGON_ID', 'SOIL0': 'SOIL0', 'SOIL1': 'SOIL1', 'SOIL2': 'SOIL2', 'SOIL3': 'SOIL3', 'PARENT1': 'PARENT1', 'PARENT2': 'PARENT2', });
lyr_cover2_admin_M110_2.set('fieldAliases', {'COVER2_ID': 'COVER2_ID', 'REG_NAME': 'REG_NAME', 'OBL_NAME': 'OBL_NAME', 'NN': 'NN', 'NAME_NEW': 'NAME_NEW', 'NN_NEW': 'NN_NEW', 'FOKR': 'FOKR', });
lyr_smolensk_parcels_agr_3.set('fieldAliases', {'field_1': 'field_1', 'CAD_N': 'CAD_N', 'STATUS': 'STATUS', 'C_COST': 'C_COST', 'AREA': 'AREA', 'UTL_ID': 'UTL_ID', 'UTL_DOC': 'UTL_DOC', });
lyr_temp_torgi_4.set('fieldAliases', {'Кадас': 'Кадас', 'Кадас_1': 'Кадас_1', 'Площа': 'Площа', 'Стату': 'Стату', 'Тип с�': 'Тип с�', 'Цена �': 'Цена �', 'Побед': 'Побед', });
lyr_torgi_centroids_5.set('fieldAliases', {'fid': 'fid', 'Кадастровый номер': 'Кадастровый номер', 'Кадастрвоая стоимость': 'Кадастрвоая стоимость', 'Площадь': 'Площадь', 'Статус аукциона': 'Статус аукциона', 'Тип сделки': 'Тип сделки', 'Цена сделки': 'Цена сделки', 'Победитель': 'Победитель', });
lyr_temp_orgs_6.set('fieldAliases', {'Наиме': 'Наиме', 'Основ': 'Основ', 'Чиста': 'Чиста', 'Рента': 'Рента', });
lyr_smolensk_soils_1.set('fieldImages', {'POLIGON_ID': 'TextEdit', 'SOIL0': 'TextEdit', 'SOIL1': 'TextEdit', 'SOIL2': 'TextEdit', 'SOIL3': 'TextEdit', 'PARENT1': 'TextEdit', 'PARENT2': 'TextEdit', });
lyr_cover2_admin_M110_2.set('fieldImages', {'COVER2_ID': 'TextEdit', 'REG_NAME': 'TextEdit', 'OBL_NAME': 'TextEdit', 'NN': 'TextEdit', 'NAME_NEW': 'TextEdit', 'NN_NEW': 'TextEdit', 'FOKR': 'TextEdit', });
lyr_smolensk_parcels_agr_3.set('fieldImages', {'field_1': 'Range', 'CAD_N': 'TextEdit', 'STATUS': 'Range', 'C_COST': 'TextEdit', 'AREA': 'TextEdit', 'UTL_ID': 'TextEdit', 'UTL_DOC': 'TextEdit', });
lyr_temp_torgi_4.set('fieldImages', {'Кадас': '', 'Кадас_1': '', 'Площа': '', 'Стату': '', 'Тип с�': '', 'Цена �': '', 'Побед': '', });
lyr_torgi_centroids_5.set('fieldImages', {'fid': 'TextEdit', 'Кадастровый номер': 'TextEdit', 'Кадастрвоая стоимость': 'TextEdit', 'Площадь': 'TextEdit', 'Статус аукциона': 'TextEdit', 'Тип сделки': 'TextEdit', 'Цена сделки': 'TextEdit', 'Победитель': 'TextEdit', });
lyr_temp_orgs_6.set('fieldImages', {'Наиме': '', 'Основ': '', 'Чиста': '', 'Рента': '', });
lyr_smolensk_soils_1.set('fieldLabels', {'POLIGON_ID': 'no label', 'SOIL0': 'no label', 'SOIL1': 'no label', 'SOIL2': 'no label', 'SOIL3': 'no label', 'PARENT1': 'no label', 'PARENT2': 'no label', });
lyr_cover2_admin_M110_2.set('fieldLabels', {'COVER2_ID': 'no label', 'REG_NAME': 'no label', 'OBL_NAME': 'no label', 'NN': 'no label', 'NAME_NEW': 'no label', 'NN_NEW': 'no label', 'FOKR': 'no label', });
lyr_smolensk_parcels_agr_3.set('fieldLabels', {'field_1': 'inline label', 'CAD_N': 'header label', 'STATUS': 'inline label', 'C_COST': 'inline label', 'AREA': 'inline label', 'UTL_ID': 'inline label', 'UTL_DOC': 'inline label', });
lyr_temp_torgi_4.set('fieldLabels', {'Кадас': 'header label', 'Кадас_1': 'inline label', 'Площа': 'inline label', 'Стату': 'inline label', 'Тип с�': 'inline label', 'Цена �': 'inline label', 'Побед': 'inline label', });
lyr_torgi_centroids_5.set('fieldLabels', {'fid': 'no label', 'Кадастровый номер': 'no label', 'Кадастрвоая стоимость': 'no label', 'Площадь': 'no label', 'Статус аукциона': 'no label', 'Тип сделки': 'no label', 'Цена сделки': 'no label', 'Победитель': 'no label', });
lyr_temp_orgs_6.set('fieldLabels', {'Наиме': 'header label', 'Основ': 'inline label', 'Чиста': 'inline label', 'Рента': 'inline label', });
lyr_temp_orgs_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});