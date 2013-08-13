
// declare your spreadsheet ID and basemap

var data_id = '0AkuokbMVYNRxdEFPeFBZdkY0S05CWUZZcWFfaFpfeGc',
    sheet = 'od6',
    //map_id = 'lifewinning.map-7nibzgui',
    markerLayer,
    features,
    features_summary,
    interaction,
    m = mapbox.map('map');
    //layer = mapbox.layer().id(map_id),
    //map = mapbox.map('map', layer, null, [easey_handlers.DragHandler()]);


//add stamen tiles

m.addLayer(new MM.TemplatedLayer('http://b.tile.stamen.com/toner-lite/{Z}/{X}/{Y}.png'));
m.ui.attribution.add()
    .content('Map tiles by <a href="http://stamen.com">Stamen Design</a>, under' +
    ' <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>.' +
    ' Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.');
m.centerzoom({
 lat: 40.72189,
        lon: -73.99927
        }, 15);
m.setZoomRange(12, 18);
//m.ui.attribution.add().content('<a href="http://mapbox.com/about/maps">Terms &amp; Feedback</a>');


// center and zoom your map
mmg_google_docs_spreadsheet(data_id, sheet, mapData);

// Build map
function mapData(f) {
    features = f;
    markerLayer = mapbox.markers.layer().features(features);


  //center markers layer
    markerLayer.factory(function (n) {
        // Create a marker using the simplestyle factory
        var elem = mapbox.markers.simplestyle_factory(n);
        // Add function that centers marker on click
        MM.addEvent(elem, 'click', function(e) {
            var markerwindow = $('.marker-popup').height();
            console.log(markerwindow);
            m.ease.location({
              lat: n.geometry.coordinates[1]+(markerwindow/100000),
              lon: n.geometry.coordinates[0]
            }).zoom(m.zoom()).optimal();
        
        });
        return elem;


    });

    interaction = mapbox.markers.interaction(markerLayer);
    m.addLayer(markerLayer);
    m.ui.zoomer.add();
    m.ui.zoombox.add();

    interaction.formatter(function (feature) {
        var o = '<h1>' + feature.properties.name + '</h1><p>';
        
        var p = '<p style=text-align:center;><img src=' + feature.properties.image + ' style= max-width:60%;></p>';
        
        var q = '<p>' + feature.properties.address + '<br><a href=http://'+ feature.properties.website + '>'+ feature.properties.website + '</a><br/>'+ feature.properties.phone + '</p>';
        
        var r = '<hr><p>' + feature.properties.schedule + '</p>';

        var color = feature.properties.color;

        if (color=='pink'){
        return o + p+  q + r;
        }
        else{
            return o + q;
        }
       
    });

}

 



