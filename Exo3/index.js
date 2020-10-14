'use strict'

var MyMorpionXO = function(){
    this.player1 = 0;
    this.player2 = 0;
    var player = 1;
    var countID = 0;
    var table = documentcreateElement('table');
    document.body.appendChild(table);
    for (var i = 1; i <=3; i++){
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j = 1; j <= 3; j++) {
            var td = documentcreateElement('td');
            td.width='250px';
            td.height='250px';
            td.style.border='px solid black';
            td.id = countID++;
            td.addEventListener('click', function(event) {
                if(!event.target.src) {
                    if(player == 1 ) {
                    var imgLink = 'cross.png';
                    var value = player;
                    }
                }
            })
        }
    }