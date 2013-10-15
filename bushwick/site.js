
// declare your spreadsheet ID and basemap

var data_id = '0AkuokbMVYNRxdFpwVHFOdjFNd0Izd09wYlJiNjB5UUE',
    sheet = 'od6',
    markerLayer,
    features,
    features_summary,
    interaction,
    m = mapbox.map('map');
    //layer = mapbox.layer().id(map_id),
    //map = mapbox.map('map', layer, null, [easey_handlers.DragHandler()]);


//add stamen tiles

m.addLayer(new MM.TemplatedLayer('http://b.tile.stamen.com/toner-lite/{Z}/{X}/{Y}.png'));
m.addLayer(mapbox.layer().id('lifewinning.BushwickGuide'));
m.ui.attribution.add()
    .content('Map tiles by <a href="http://stamen.com">Stamen Design</a>, under' +
    ' <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>.' +
    ' Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.');
m.centerzoom({
 lat: 40.7040,
        lon: -73.9338
        }, 15);
m.setZoomRange(12, 18);

// set data with google spreadsheet
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
            
            //centering against markerwindow 

            var markerCenterX = $('.marker-popup').height()/2;
            var markerCenterY = $('.marker-popup').width()/2;
            var markerpopupHeight= $('.marker-popup').height();

            console.log($('.marker-popup').height());
            if ( markerpopupHeight > 400){
            var markerWindowLatLon = m.pointLocation({x: e.clientX-markerCenterX+150, y: e.clientY-(markerCenterY+150)});
            }
            else{
            var markerWindowLatLon = m.pointLocation({x: e.clientX-markerCenterX, y: e.clientY-markerCenterY});
           }
            
             m.ease.location({
               lat: markerWindowLatLon.lat,
               lon: markerWindowLatLon.lon
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
        
        var p = '<p style=text-align:center;><img src=' + feature.properties.image + ' style= max-width:50%;></p>';
        
        var q = feature.properties.address + '<br><a href=http://'+ feature.properties.website + '>'+ feature.properties.website + '</a><br/>'+ feature.properties.phone + '</p>';
        
        var r = '<hr><p>' + feature.properties.schedule + '</p>';

        var color = feature.properties.color;

        if (color=='pink'){
        return o + p +  q + r;
        }
        else{
            return o + q;
        }
       
    });

//legend zooms that are tediously hardcoded and should probably be tied directly to the marker data

document.getElementById('zoomout').onclick=function(){
    m.ease.location({lat: 40.7040, lon: -73.9338}).zoom(15).optimal();
    return false;
}

document.getElementById('cccp').onclick=function(){
    m.ease.location({lat: 40.706137, lon: -73.933345}).zoom(18).optimal();
    return false;
}

document.getElementById('etal').onclick=function(){
    m.ease.location({lat: 40.706177, lon: -73.933225}).zoom(18).optimal();
    return false;
}

document.getElementById('nurture').onclick=function(){
    m.ease.location({lat: 40.705911, lon: -73.933367}).zoom(18).optimal();
    return false;
}

document.getElementById('associated').onclick=function(){
    m.ease.location({lat: 40.70869, lon: -73.925532}).zoom(18).optimal();
    return false;
}

document.getElementById('activespace').onclick=function(){
    m.ease.location({lat: 40.708731, lon: -73.925371}).zoom(18).optimal();
    return false;
}

document.getElementById('blackston').onclick=function(){
    m.ease.location({lat: 40.716135, lon: -73.990644}).zoom(18).optimal();
    return false;
}

document.getElementById('dodge').onclick=function(){
    m.ease.location({lat: 40.721254, lon: -73.9925553333333}).zoom(18).optimal();
    return false;
}

document.getElementById('elevenrivington01').onclick=function(){
    m.ease.location({lat:   40.721494, lon: -73.992524}).zoom(18).optimal();
    return false;
    }

document.getElementById('elevenrivington02').onclick=function(){
    m.ease.location({lat: 40.7220185454545, lon: -73.9919604545454}).zoom(18).optimal();
    return false;
    }

document.getElementById('featureinc').onclick=function(){
    m.ease.location({lat: 40.719985875, lon: -73.990247875}).zoom(18).optimal();
    return false;
    }

document.getElementById('lesleyheller').onclick=function(){
    m.ease.location({lat: 40.717156, lon: -73.990958}).zoom(18).optimal();
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
    m.ease.location({lat: 40.7210522, lon: -74.0017456}).zoom(18).optimal();
    return false;
    }

document.getElementById('nawa').onclick=function(){
    m.ease.location({lat: 40.736186, lon: -73.993824}).zoom(18).optimal();
    return false;
    }

document.getElementById('kerrys').onclick=function(){
    m.ease.location({lat: 40.716299, lon: -73.991436}).zoom(18).optimal();
    return false;
    }

document.getElementById('stellarrays').onclick=function(){
    m.ease.location({lat: 40.721563, lon: -73.993076}).zoom(18).optimal();
    return false;
    }
document.getElementById('abrons').onclick=function(){
    m.ease.location({lat: 40.715076, lon: -73.983781}).zoom(18).optimal();
    return false;
    }

}

 


