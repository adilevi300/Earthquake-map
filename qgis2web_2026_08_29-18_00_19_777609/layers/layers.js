var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EarthquakeImpactWeb_1 = new ol.format.GeoJSON();
var features_EarthquakeImpactWeb_1 = format_EarthquakeImpactWeb_1.readFeatures(json_EarthquakeImpactWeb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EarthquakeImpactWeb_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EarthquakeImpactWeb_1.addFeatures(features_EarthquakeImpactWeb_1);
var lyr_EarthquakeImpactWeb_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EarthquakeImpactWeb_1, 
                style: style_EarthquakeImpactWeb_1,
                popuplayertitle: 'Earthquake Impact',
                interactive: true,
    title: 'Earthquake Impact' });
var format_ContextualFactors_2 = new ol.format.GeoJSON();
var features_ContextualFactors_2 = format_ContextualFactors_2.readFeatures(json_ContextualFactors_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContextualFactors_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContextualFactors_2.addFeatures(features_ContextualFactors_2);
var lyr_ContextualFactors_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContextualFactors_2, 
                style: style_ContextualFactors_2,
                popuplayertitle: 'Contextual Factors',
                interactive: true,
                title: '<img src="styles/legend/ContextualFactors_2.png" /> Contextual Factors'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EarthquakeImpactWeb_1.setVisible(true);lyr_ContextualFactors_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EarthquakeImpactWeb_1,lyr_ContextualFactors_2];
lyr_EarthquakeImpactWeb_1.set('fieldAliases', {'No.': 'No.', 'Year': 'Year', 'Country': 'Country', 'Earthquake': 'Earthquake', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Magnitude': 'Magnitude', 'Death': 'Deaths', 'Injured': 'Injured', 'People_affected': 'People Affected', 'Damage_USD': 'Economic Damage (USD)', 'Impact_Score': 'Impact_Score', 'Population_before': 'Population_before', 'Governance': 'Governance', 'Pverty_line': 'Poverty Rate', 'Stractural vulnerbility': 'Structural Vulnerability', 'Socioeconomic_Vulnerability': 'Socioeconomic Vulnerability', 'Year_Web': 'Year', });
lyr_ContextualFactors_2.set('fieldAliases', {'fid': 'fid', 'No.': 'No.', 'Year': 'Year', 'Country': 'Country', 'Earthquake': 'Earthquake', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Magnitude': 'Magnitude', 'Death': 'Death', 'Injured': 'Injured', 'People_affected': 'People_affected', 'Damage_USD': 'Damage_USD', 'Impact_Score': 'Impact_Score', 'Population_before': 'Population_before', 'Governance': 'Governance', 'Pverty_line': 'Poverty Rate', 'Stractural vulnerbility': 'Structural Vulnerability', 'Socioeconomic_Vulnerability': 'Socioeconomic Vulnerability', 'Year_Web': 'Year', });
lyr_EarthquakeImpactWeb_1.set('fieldImages', {'No.': 'Range', 'Year': 'Range', 'Country': 'TextEdit', 'Earthquake': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Magnitude': 'TextEdit', 'Death': 'TextEdit', 'Injured': 'TextEdit', 'People_affected': 'TextEdit', 'Damage_USD': 'TextEdit', 'Impact_Score': 'TextEdit', 'Population_before': 'TextEdit', 'Governance': 'TextEdit', 'Pverty_line': 'TextEdit', 'Stractural vulnerbility': 'TextEdit', 'Socioeconomic_Vulnerability': 'TextEdit', 'Year_Web': 'TextEdit', });
lyr_ContextualFactors_2.set('fieldImages', {'fid': 'TextEdit', 'No.': 'Range', 'Year': 'Range', 'Country': 'TextEdit', 'Earthquake': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Magnitude': 'TextEdit', 'Death': 'TextEdit', 'Injured': 'TextEdit', 'People_affected': 'TextEdit', 'Damage_USD': 'TextEdit', 'Impact_Score': 'TextEdit', 'Population_before': 'TextEdit', 'Governance': 'TextEdit', 'Pverty_line': 'TextEdit', 'Stractural vulnerbility': 'TextEdit', 'Socioeconomic_Vulnerability': 'TextEdit', 'Year_Web': 'TextEdit', });
lyr_EarthquakeImpactWeb_1.set('fieldLabels', {'No.': 'hidden field', 'Year': 'hidden field', 'Country': 'inline label - visible with data', 'Earthquake': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Magnitude': 'inline label - visible with data', 'Death': 'inline label - visible with data', 'Injured': 'inline label - visible with data', 'People_affected': 'inline label - visible with data', 'Damage_USD': 'inline label - visible with data', 'Impact_Score': 'hidden field', 'Population_before': 'hidden field', 'Governance': 'hidden field', 'Pverty_line': 'hidden field', 'Stractural vulnerbility': 'hidden field', 'Socioeconomic_Vulnerability': 'hidden field', 'Year_Web': 'inline label - visible with data', });
lyr_ContextualFactors_2.set('fieldLabels', {'fid': 'hidden field', 'No.': 'hidden field', 'Year': 'hidden field', 'Country': 'inline label - visible with data', 'Earthquake': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Magnitude': 'hidden field', 'Death': 'hidden field', 'Injured': 'hidden field', 'People_affected': 'hidden field', 'Damage_USD': 'hidden field', 'Impact_Score': 'hidden field', 'Population_before': 'hidden field', 'Governance': 'inline label - visible with data', 'Pverty_line': 'inline label - visible with data', 'Stractural vulnerbility': 'inline label - visible with data', 'Socioeconomic_Vulnerability': 'inline label - visible with data', 'Year_Web': 'inline label - visible with data', });
lyr_ContextualFactors_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});