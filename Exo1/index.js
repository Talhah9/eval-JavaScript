'use strict';

/**
 * @param {Number} xAxis : number of column
 * @param {Numer} yAxis : number of lines
 */

 var GridGenerator = function GridGenerator(xAxis, yAxis) {
     this.xAxis = xAxis;
     this.yAxis = yAxis;
     this.arrayColors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
     this.intervalDelay = this.randomDelay();
 }

 GridGenerator.prototype.firstTable = function(){
     var table = document.createElement('table');
     table.style.borderCollapse ='collapse';

     
 }