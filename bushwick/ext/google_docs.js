// converts google spreadsheet data to map data

function mmg_google_docs_spreadsheet(id, sheet, callback) {
    if (typeof reqwest === 'undefined'){
        throw 'CSV: reqwest required for mmg_csv_url';
    }

    var url = 'https://spreadsheets.google.com/feeds/list/' + id +
        '/' + sheet + '/public/values?alt=json-in-script&callback=callback';
    reqwest({
        url: url,
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: response,
        error: response
    }); 
   
    function response(x) {
        var features = [],
            latfield = '',
            lonfield = '';
        if (!x || !x.feed) return features;
        for (var f in x.feed.entry[0]) {
            if (f.match(/\$Lat/i)){
                latfield = f;           
            }
            if (f.match(/\$Lon/i)){
                lonfield = f;              
            }
        }

        for (var i = 0; i < x.feed.entry.length; i++) {                             
            var entry = x.feed.entry[i];
            var feature = {
                geometry: {
                    type: 'Point',
                    coordinates: []
                },
                // identify what's in the spreadsheet to convert to JSON properties
                properties: {
                    'marker-color':'#8A8486',
                    'marker-size':'small',
                    'marker-symbol': entry['gsx$icon'].$t,
                    'address': entry['gsx$address'].$t,
                    'name': entry['gsx$name'].$t,
                    'website':entry['gsx$website'].$t,
                    'phone':entry['gsx$phone'].$t,
                    'hours':entry['gsx$hours'].$t,
                    'schedule':entry['gsx$schedule'].$t,
                    'color':entry['gsx$color'].$t,
                    'image':entry['gsx$image'].$t,
                         
                }
            };

            for (var y in entry) {
                if (y === latfield) feature.geometry.coordinates[1] = parseFloat(entry[y].$t);
                else if (y === lonfield) feature.geometry.coordinates[0] = parseFloat(entry[y].$t);
                else if (y.indexOf('gsx$') === 0) {                            
                    feature.properties[y.replace('gsx$', '')] = entry[y].$t;
                }
            }

//custom features for specific markers
            if (feature.geometry.coordinates.length == 2) features.push(feature);

            _.each(feature, function(value, key) {
                if(feature.properties['color']=="pink"){feature.properties['marker-color']='#ff00b1', feature.properties['marker-size']='medium'} 
                if(feature.properties['color']=="green"){feature.properties['marker-color']='#55ff00', feature.properties['marker-size']='medium'}
                if(feature.properties['color']=="black"){feature.properties['marker-color']='#000000'}
                
            });
        }
        return callback(features);
    }
}

