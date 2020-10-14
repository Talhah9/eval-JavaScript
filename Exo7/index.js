'use strict'
/** 
* @param {number[]}
*/

var ComputeNotes = function ComputeNotes(grades){
    this.grades = grades;
}

ComputeNotes.prototype.averageGrade = function(){
    var sumNotes = 0;

    this.grades.forEach(function(grade){
        sumNotes += grade
        })

        return(sumNotes/this.grades.length).toFixed(2)
    }
    /**
     * run
     */

     ComputeNotes.prototype.run = function() {
        var textHtml = {
            'listGrades' : document.createElement('p'),
            'averageGrades' : document.createElement('span') 
           }

           textHtml['listGrades'].textContent = 'La note de cet étudiant : ' + this.grades;
           textHtml['averageGrades'].textContent = 'Total = ' + this.averageGrade() +'de moyenne générale';

           for (const key in textHtml){
               document.body.appendChild(textHtml[key])
           }
     }

     var student = newComputesNotes([15, 15, 12, 19, 3, 8, 8, 8, 13]);
     student.run();
