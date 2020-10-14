'use strict'
 /**
  * renderWorldMap
  */

  var req = new XMLHttpRequest();
  req.open("Get", "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg");
  req.send();

  var WorldMap = function WorldMap(){
      this.map;
      this.selected = null;
  }

  WorldMap.prototype.run = function(){
      this.renderWorldMap();
      this.svgHover();
  }

  WorldMap.prototype.renderWorldMap = function renderWorldMap(){
      
    var obj = docuement.createElement('object', true);
    obj.setAttribute('type', 'image/svg+xml');
    obj.setAttribute('data', 'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
    obj.setAttribute('width', 500);
    obj.setAttribute('height', 400);
    obj.setEventListener('load', function() { ; }, false);
    document.body.appendChild(obj);
  }

  WorldMap.prototype.svgHover = function svgHover(){
      this.map = document.querySelector('object');
      var countries = this.map.querySelectorAll('path');
      console.log(countries);
  }

  var myMap = new WorldMap();
  myMap.run();