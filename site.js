
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
        }, 14);
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
              lat: n.geometry.coordinates[1],
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
        
        var q = feature.properties.address + '<br><a href=http://'+ feature.properties.website + '>'+ feature.properties.website + '</a><br/>'+ feature.properties.phone + '</p>';
        
        var r = '<hr><p>' + feature.properties.schedule + '</p>';

        var color = feature.properties.color;

        if (color=='pink'){
        return o + p+  q + r;
        }
        else{
            return o + q;
        }
       
    });

//legend zooms that are tediously hardcoded and should probably be tied directly to the marker data

document.getElementById('zoomout').onclick=function(){
    m.ease.location({lat: 40.72189, lon: -73.99927}).zoom(14).optimal();
    return false;
}

document.getElementById('blackston').onclick=function(){
    m.ease.location({lat: 40.716135, lon: -73.990644}).zoom(18).optimal();
    return false;
}

document.getElementById('dodge').onclick=function(){
    m.ease.location({lat: 40.721254, lon: -73.9925553}).zoom(18).optimal();
    return false;
}

document.getElementById('elevenrivington01').onclick=function(){
    m.ease.location({lat:   40.721494, lon: -73.992524}).zoom(18).optimal();
    return false;
    }

document.getElementById('elevenrivington02').onclick=function(){
    m.ease.location({lat: 40.722069, lon: -73.99206}).zoom(18).optimal();
    return false;
    }

document.getElementById('featureinc').onclick=function(){
    m.ease.location({lat: 40.7198026, lon: -73.9894884}).zoom(18).optimal();
    return false;
    }

document.getElementById('lesleyheller').onclick=function(){
    m.ease.location({lat: 40.717013, lon: -73.990958}).zoom(18).optimal();
    return false;
    }

document.getElementById('nyaa').onclick=function(){
    m.ease.location({lat: 40.7184651428571, lon: -74.0059435714286}).zoom(18).optimal();
    return false;
    }
document.getElementById('participant').onclick=function(){
    m.ease.location({lat: 40.7217946666667, lon: -73.98518225}).zoom(18).optimal();
    return false;
    }
document.getElementById('rfeldman').onclick=function(){
    m.ease.location({lat: 40.722069, lon: -74.0017456}).zoom(18).optimal();
    return false;
    }

document.getElementById('nawa').onclick=function(){
    m.ease.location({lat: 40.736186, lon: -73.993824}).zoom(18).optimal();
    return false;
    }

document.getElementById('kerrys').onclick=function(){
    m.ease.location({lat: 40.71617, lon: -73.99131}).zoom(18).optimal();
    return false;
    }

}

 



