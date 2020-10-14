'use strict'

function checkPhoneNumber(numero) {
    return numero.match('(06|01|07)[0-9]{8}$') ? true : false;
}

function computeNotes(tableau) {
    let total = tableau.reduce((number, accumolator) => number + accumolator);

    console.log(total);
    return (total/tableau.length);
}

    console.log(checkPhoneNumber('0692444549'));

    console.log(checkPhoneNumber('0992584545'));

    console.log(computeNotes([2,2]));