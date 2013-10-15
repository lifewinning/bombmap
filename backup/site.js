
// declare your spreadsheet ID and basemap

// var data_id = '0AkuokbMVYNRxdEFPeFBZdkY0S05CWUZZcWFfaFpfeGc',
//     sheet = 'od6',
//     markerLayer,

//     features_summary,
//     interaction,
    var m = mapbox.map('map');
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


//add markers layer

var markers = mapbox.markers.layer().url('ext/bOMBDowntownGuideExportReady-1380238198232.geojson');
m.addLayer(markers);

var interaction = mapbox.markers.interaction(markers);

    m.ui.zoomer.add();
    m.ui.zoombox.add();

    interaction.formatter(function(feature) {
        var o = '<h1>' + feature.properties.Name + '</h1><p>';
        
        var p = '<p style=text-align:center;><img src=' + feature.properties.Image + ' style= max-width:50%;></p>';
        
        var q = feature.properties.Address + '<br><a href=http://'+ feature.properties.Website + '>'+ feature.properties.Website + '</a><br/>'+ feature.properties.Phone + '</p>';
        
        var r = '<hr><p>' + feature.properties.Schedule + '</p>';

        var image = feature.properties.Image;

        if (image != 'null'){
        return o + p +  q + r;
        }
        else{
            return o + q;
        }
       
    });

  //center markers layer
    markers.factory(function (n) {
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




