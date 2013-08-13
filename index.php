<?php
/*
Template Name: downtown
*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>
      BOMB's Downtown Guide
    </title>
  <head>
    <meta charset='utf-8' />
    <link href='ext/mapbox.css' rel='stylesheet' />
   
<link rel="stylesheet" type="text/css" href="http://bombsite.powweb.com/wp-content/themes/sandbox/style.css" />   
    <style>
      #map { 
        position:absolute; top:0;bottom:0; left: -1; width:100%;z-index:-1;
      }  

      .marker-popup h1{
        font-family: sans-serif;
        font-size: 18px;
        font-weight: 800;
      } 

      .marker-popup p {
        font-size: 12px;
        font-family: sans-serif;
        font-weight: 200;
      }
      .marker-popup a{
        text-decoration: none;
        color: #ff00b1;
      }
      .marker-popup{
        -moz-border-radius: 10%;
        border-radius: 10%;


      }



</style>
  </head>
  <body>

<!-- <div class="controls" style="z-index: 0;">
      <div id="guidelink">
        <div class="img-shadow">
          <div id="mapContainer">
            <h1>Downtown Galleries</h1>
            
          </div>
        </div>
      </div>
</div> -->

<!-- Section: Map -->
   
<div id='map'>
</div>
  </body>
</html>
  
    <script src='https://www.google.com/jsapi'></script>
    <script src='http://api.tiles.mapbox.com/mapbox.js/v0.6.7/mapbox.js'></script>
    <script src='ext/jquery.min.js'></script>
    <script src='ext/underscore.min.js'></script>
    <script src='ext/google_docs.js'></script>
    <script src='site.js'></script>
  </body>
</html>
